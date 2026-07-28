import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function findScrollContainer(element) {
  if (!element) return null;
  let parent = element.parentElement;
  while (parent && parent !== document.documentElement) {
    const style = window.getComputedStyle(parent);
    if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && parent.scrollHeight > parent.clientHeight) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.getElementById('app-layout-container') || window;
}

export default function Link({ 
  href, 
  children, 
  className = '', 
  onClick = null, 
  ...props 
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const linkRef = useRef(null);

  // Next.js-style Prefetching
  useEffect(() => {
    if (!href || href.startsWith('#')) return;
    const [path] = href.split('#');
    if (!path || path === location.pathname) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        import(/* @vite-ignore */ path).catch(() => {});
        if (linkRef.current) observer.unobserve(linkRef.current);
      }
    }, { threshold: 0.1 });

    if (linkRef.current) observer.observe(linkRef.current);
    return () => observer.disconnect();
  }, [href, location.pathname]);

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    const container = findScrollContainer(linkRef.current);

    // Case 1: Pure `#` link
    if (href === '#') {
      if (container && container !== window) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.history.pushState(null, '', '#'); 
      return;
    }

    // Case 2: In-page anchor link (e.g., `#section-1`)
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element && container && container !== window) {
        const targetPosition = element.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top;
        container.scrollTo({ top: targetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const [path, hash] = href.split('#');

    // Case 3: Navigating within the exact same path
    if (path === location.pathname) {
      if (hash) {
        const element = document.querySelector(`#${hash}`);
        if (element && container && container !== window) {
          const targetPosition = element.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top;
          container.scrollTo({ top: targetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        } else if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        if (container && container !== window) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    // Case 4: Navigating to a DIFFERENT route
    // First, immediately reset the container & window scroll position
    if (container && container !== window) {
      container.scrollTop = 0;
    }
    window.scrollTo(0, 0);

    // Then perform navigation
    navigate(href);

    // If target URL contains a hash, attempt to scroll to it post-render
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <a ref={linkRef} href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}