import React from "react";

export function Button({ children, onClick, variant = "solid", className = "" }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium focus:outline-none transition";

  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
