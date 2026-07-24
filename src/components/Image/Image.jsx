import React, { useState } from 'react';

const Image = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  blurDataURL,
  sizes,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent Cumulative Layout Shift (CLS) by locking the exact aspect ratio
  const isDimensionsSet = width !== undefined && height !== undefined;
  const aspectRatio = isDimensionsSet ? Number(width) / Number(height) : null;

  // Next-style "fill" matches absolute overlays, static matches relative boxes
  const wrapperClass = fill
    ? 'absolute inset-0 h-full w-full'
    : 'relative inline-block max-w-full';

  const wrapperStyle = !fill
    ? {
        width: width ? `${width}px` : '100%',
        aspectRatio: aspectRatio ? `${aspectRatio}` : 'auto',
      }
    : {};

  // Tailored base image configurations with smooth transitions
  const baseImageClass = `w-full block transition-all duration-500 ease-in-out ${
    fill ? 'h-full object-cover' : 'h-auto object-initial'
  } ${blurDataURL && !isLoaded ? 'blur-xl scale-105' : 'blur-0 scale-100'}`;

  return (
    <div 
      className={`vite-image-wrapper ${wrapperClass} ${className}`} 
      style={wrapperStyle}
    >
      {/* Optional blur placeholder layer */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className={`${baseImageClass} absolute top-0 left-0 pointer-events-none`}
        />
      )}
      
      <img
        src={src} // Handled automatically by Vite bundle path substitutions
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'} // Native lazy loading
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={baseImageClass}
        {...props}
      />
    </div>
  );
};

export default Image