"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NextImageConcept() {
  const ref = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Scroll Down</h1>

      <div style={{ height: "300vh" }}>
        <p>Keep scrolling...</p>
      </div>

      <div ref={ref}>
        {showImage && (
          <Image
            src="/nature2.png"
            alt="Lazy loaded image"
            width={800}
            height={200}
          />
        )}
      </div>
    </main>
  );
}
