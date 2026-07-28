import { useState } from 'react';

const Image = ({
  src,
  alt = '',
  width,
  height,
  fill = false,
  priority = false,
  blurDataURL,
  sizes,
  className = '',
  objectFit = 'contain', // Added objectFit prop with 'contain' as default
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isDimensionsSet = width !== undefined && height !== undefined;
  const aspectRatio = isDimensionsSet ? Number(width) / Number(height) : null;

  const wrapperClass = fill
    ? 'absolute inset-0 h-full w-full'
    : 'relative inline-block max-w-full';

  const wrapperStyle = !fill
    ? {
        width: width ? `${width}px` : '100%',
        aspectRatio: aspectRatio ? aspectRatio : 'auto',
      }
    : {};

  // Dynamically map the objectFit prop to Tailwind classes
  const fitClass = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    scaleDown: 'object-scale-down',
  }[objectFit] || 'object-contain';

  const baseImageClass = `w-full block transition-all duration-500 ease-in-out ${
    fill ? `h-full ${fitClass}` : `h-auto ${fitClass}`
  } ${blurDataURL && !isLoaded ? 'blur-xl scale-105' : 'blur-0 scale-100'}`;

  return (
    <div 
      className={`vite-image-wrapper ${wrapperClass} ${className}`} 
      style={wrapperStyle}
    >
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          loading={priority ? 'eager' : 'lazy'} 
          className={`${baseImageClass} absolute top-0 left-0 pointer-events-none`}
          style={{ aspectRatio: aspectRatio ? aspectRatio : 'auto' }}
        />
      )}
      
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={baseImageClass}
        style={{ aspectRatio: aspectRatio ? aspectRatio : 'auto' }}
        {...props}
      />
    </div>
  );
};

export default Image;