import { useState } from 'react';

const Image = ({
  src,          // String URL or imported LQIP object ({ src, lqip })
  srcSet,       // Optional: srcset string
  alt = '',
  sizes = '100vw',
  contain = false,
  position = 'object-center', // 🔥 New prop: accepts any Tailwind object position class
  priority = false,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Safe normalization of data sources
  const imageSrc = typeof src === 'object' ? src?.src : src;
  const blurDataURL = typeof src === 'object' ? src?.lqip : null;

  // 2. Combine scaling and custom positioning uniformly
  const fitClass = contain ? 'object-contain' : 'object-cover';
  const layoutClasses = `${fitClass} ${position}`;
  
  const showImage = !blurDataURL || isLoaded;

  return (
    <figure className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Blur Placeholder Layer */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full ${layoutClasses} filter blur-xl scale-110 pointer-events-none`}
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
        className={`w-full h-full ${layoutClasses} transition-opacity duration-500 ease-out ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </figure>
  );
};

export default Image;
