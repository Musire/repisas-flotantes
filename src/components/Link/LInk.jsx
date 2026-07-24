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

  // Next.js Prefetching Behavior
  useEffect(() => {
    if (href.startsWith('#') || href === '') return;
    const [path] = href.split('#');
    if (!path || path === location.pathname) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        import(/* @vite-ignore */ path).catch(() => {});
        observer.unobserve(linkRef.current);
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

    if (href === '#') {
      if (container && container !== window) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
        if (container.scrollTop > 0) container.scrollTop = 0;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.history.pushState(null, '', '#'); 
      return;
    }

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

    const [path] = href.split('#');
    if (path === location.pathname) {
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        const hash = href.substring(hashIndex);
        const element = document.querySelector(hash);
        if (element && container && container !== window) {
          const targetPosition = element.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top;
          container.scrollTo({ top: targetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', hash);
        }
      } else {
        if (container && container !== window) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <a ref={linkRef} href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}