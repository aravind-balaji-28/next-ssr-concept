"use client";
import React from "react";
export default function ButtonClient(): React.JSX.Element {
  const handleClick = (): void => {
    console.warn("hello");
  };
  return (
    <button
      className="btn btn-info"
      onClick={handleClick}
    >
      Click
    </button>
  );
}