import React, { useEffect, useRef, useState } from "react";

/**
 * Renders children only once the placeholder scrolls near the viewport.
 * Keeps heavy below-the-fold chunks (and their dependencies, e.g. the
 * backend client) out of the initial page load to reduce unused JS.
 */
const InView = ({
  children,
  rootMargin = "400px",
  minHeight = "60vh",
  id,
}: {
  children: React.ReactNode;
  rootMargin?: string;
  minHeight?: string;
  id?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [show, rootMargin]);

  return <div ref={ref}>{show ? children : <div style={{ minHeight }} />}</div>;
};

export default InView;
