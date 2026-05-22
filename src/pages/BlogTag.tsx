import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NEW_HOME = 'https://atqi.dev';

const BlogTag = () => {
  const { tag } = useParams<{ tag: string }>();
  const target = tag ? `${NEW_HOME}/tag/${tag}` : NEW_HOME;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Helmet>
        <title>Moved to atqi.dev</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={target} />
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </Helmet>
      <div className="text-center max-w-md">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
          Tag moved
        </p>
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Redirecting to atqi.dev…
        </h1>
        <p className="text-muted-foreground">
          If you are not redirected,{' '}
          <a href={target} className="text-accent underline">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default BlogTag;
