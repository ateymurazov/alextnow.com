// Fetches the list of posts from atqi.dev by reading its sitemap and
// extracting <title> + <meta description> from each post page.
// Cached in-memory for 1 hour per worker.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SITE = "https://atqi.dev";
const TTL_MS = 60 * 60 * 1000;

type Post = {
  url: string;
  slug: string;
  title: string;
  description: string;
  lastmod?: string;
};

let cache: { at: number; data: Post[] } | null = null;

function pick(re: RegExp, html: string): string {
  const m = html.match(re);
  return m?.[1]?.trim() ?? "";
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

async function fetchPost(loc: string, lastmod?: string): Promise<Post | null> {
  try {
    const res = await fetch(loc, { headers: { "User-Agent": "alextnow-blog-bridge/1.0" } });
    if (!res.ok) return null;
    const html = await res.text();
    const ogTitle = pick(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i, html);
    const docTitle = pick(/<title>([^<]+)<\/title>/i, html);
    const title = decode(ogTitle || docTitle).replace(/\s*[|\-–]\s*atqi\.dev.*$/i, "").trim();
    const desc = decode(
      pick(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i, html) ||
        pick(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i, html),
    );
    const slug = loc.replace(/^.*\/post\//, "").replace(/\/$/, "");
    if (!title) return null;
    return { url: loc, slug, title, description: desc, lastmod };
  } catch {
    return null;
  }
}

async function loadPosts(): Promise<Post[]> {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  const urls: { loc: string; lastmod?: string }[] = [];
  const re = /<url>([\s\S]*?)<\/url>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    const loc = pick(/<loc>([^<]+)<\/loc>/, m[1]);
    const lastmod = pick(/<lastmod>([^<]+)<\/lastmod>/, m[1]) || undefined;
    if (loc.includes("/post/")) urls.push({ loc, lastmod });
  }
  urls.sort((a, b) => (b.lastmod ?? "").localeCompare(a.lastmod ?? ""));
  const out = await Promise.all(urls.slice(0, 20).map((u) => fetchPost(u.loc, u.lastmod)));
  return out.filter((p): p is Post => p !== null);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const now = Date.now();
    if (!cache || now - cache.at > TTL_MS) {
      cache = { at: now, data: await loadPosts() };
    }
    return new Response(JSON.stringify({ posts: cache.data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ posts: [], error: String(e) }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
