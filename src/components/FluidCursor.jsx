import React, { useRef } from "react";
import useFluidCursor from "@/hooks/use-FluidCursor";

const FluidCursor = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  useFluidCursor(canvasRef);

  return (
    <div className={`relative ${className}`}>
      {children}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto -z-10"
        style={{
          mixBlendMode: "screen",
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default FluidCursor;
