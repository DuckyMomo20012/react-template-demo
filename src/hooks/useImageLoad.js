import { useCallback, useRef, useState, useMemo } from 'react';

const useImageLoad = () => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOnLoad = () => {
    // Image loaded
    setIsLoaded(true);
  };

  const handleOnError = () => {
    setIsError(true);
  };

  const observer = useMemo(() => {
    return new MutationObserver((changes) => {
      changes.forEach((change) => {
        if (change.attributeName.includes('src')) {
          // Detect ref.current.src change
          // console.log('ref.current.src', ref.current.src);
          setIsLoaded(false);
          setIsError(false);
        }
      });
    });
  }, []);

  const imageRef = useCallback(
    (node) => {
      // Component unmount and mount again, so we need to clean up the observer
      // and event listener
      if (ref.current) {
        // NOTE: Cleanup events
        ref.current.removeEventListener('load', handleOnLoad);
        ref.current.removeEventListener('error', handleOnError);
        observer.disconnect();
      }

      ref.current = node;

      if (ref.current) {
        ref.current.onload = handleOnLoad;
        ref.current.onerror = handleOnError;
        observer.observe(ref.current, { attributes: true });
      }
    },
    [observer],
  );
  return { imageRef, isLoaded, isError };
};

export { useImageLoad };
