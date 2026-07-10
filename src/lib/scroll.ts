/**
 * Smoothly scroll to a section by id.
 *
 * Several sections (Contact, Insights) are lazily mounted via <InView>, so the
 * first scrollIntoView can fire before the real content exists — the placeholder
 * is a different height than the final content, which shifts the layout and
 * leaves the user at the wrong spot (or looking at an empty section).
 *
 * To make navigation reliable we re-issue the scroll whenever the document
 * height changes (i.e. a lazy section just mounted) for a short window after the
 * initial request.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth" });

  let lastHeight = document.body.scrollHeight;
  let ticks = 0;
  const interval = window.setInterval(() => {
    ticks += 1;
    const height = document.body.scrollHeight;
    if (height !== lastHeight) {
      lastHeight = height;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    if (ticks >= 12) window.clearInterval(interval);
  }, 120);
}
