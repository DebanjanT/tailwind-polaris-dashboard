import { useEffect, useRef } from "react";
import dtbLogo from "../../assets/dtb.svg";

interface DTBLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-20 h-20",
};

export const DTBLoader = ({ size = "md", className = "" }: DTBLoaderProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Add pulse animation
    img.style.animation = "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite";
  }, []);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeMap[size]}`}>
        <img
          ref={imgRef}
          src={dtbLogo}
          alt="Loading..."
          className={`w-full h-full object-contain opacity-80 transition-opacity`}
        />
        {/* Circular spinner around the logo */}
        <div
          className={`absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin`}
        />
      </div>
    </div>
  );
};

export default DTBLoader;
