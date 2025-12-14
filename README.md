What is Next.js? 
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
Server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, image optimization, and built-in performance optimizations.

Image optimization:
1. Check Compression (Smaller Size) 
•	Example: banner.png (1.2MB) → served as 120KB
•	Even if your file is .png or .jpg change (WebP / AVIF)
2. Check Responsive Images 
You’ll see srcset automatically added

Eg:
srcset="
    /_next/image?url=%2Fnature2.png&w=640&q=75 640w,
    /_next/image?url=%2Fnature2.png&w=1080&q=75 1080w
  "
3. Check Lazy Loading ⚡
How to check
1.	Open Network → Img
2.	Reload page
3.	Scroll down slowly
loading="lazy"


4. Check Faster Page Load 🚀
How to check
1.	Open Lighthouse (DevTools)
2.	Run Performance audit
Compare
•	React app → lower score
•	Next.js app → higher score
