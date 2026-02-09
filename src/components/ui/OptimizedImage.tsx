import { useState } from "react";
import { cn } from "@/utils/cn";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      {/* Blur Placeholder */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          "transition-all duration-700 ease-in-out",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg",
          className
        )}
        {...props}
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-xs text-white/20">
          Image unavailable
        </div>
      )}
    </div>
  );
}
