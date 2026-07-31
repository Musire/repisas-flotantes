import { useState } from 'react';

const Image = ({
  src, // Accepts string URL OR imported LQIP object ({ src, lqip })
  srcSet, // Optional: srcset string from vite-imagetools
  sizes = '100vw', // Default sizes to 100vw so srcSet works out of the box
  alt = '',
  fill = false,
  priority = false,
  aspectRatio = '3/2',
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Derive src string and blurDataURL directly from the imported object
  const imageSrc = typeof src === 'object' ? src?.src : src;
  const blurDataURL = typeof src === 'object' ? src?.lqip : null;

  // 2. Derive object-fit behavior automatically based on `fill`
  const fitClass = fill ? 'object-cover object-center' : 'object-contain';

  // 3. Layout modes & CLS Defense
  const wrapperClass = fill
    ? 'absolute inset-0 h-full w-full'
    : 'relative inline-block w-full';

  // Fallback aspect-ratio style to lock space before image loads
  const wrapperStyle = !fill ? { aspectRatio } : {};

  // If there's no blur placeholder layer, show the image immediately to avoid transparent render bugs
  const showImage = !blurDataURL || isLoaded;

  return (
    <div
      className={`vite-image-wrapper overflow-hidden ${wrapperClass} ${className}`}
      style={wrapperStyle}
    >
      {/* Blur Placeholder Layer (LQIP) */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover filter blur-xl scale-110 pointer-events-none"
        />
      )}

      {/* Main High-Res Image */}
      <img
        src={imageSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${fitClass} transition-opacity duration-500 ease-out ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

export default Image;