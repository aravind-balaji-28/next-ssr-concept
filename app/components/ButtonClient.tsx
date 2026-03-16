"use client";

export default function ButtonClient() {
  return (
    <button
    className="btn btn-info"
      onClick={() => {
        alert("hello");
      }}
    >
      Click
    </button>
  );
}