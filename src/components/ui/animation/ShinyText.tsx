import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = "",
}) => {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        background: "linear-gradient(90deg, #999 0%, #fff 50%, #999 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        animation: disabled ? "none" : `shine-simple ${speed}s infinite linear`,
      }}
    >
      <style>
        {`
          @keyframes shine-simple {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}
      </style>
      {text}
    </span>
  );
};

export default ShinyText;
