import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://ssr-concept.netlify.app/about";
  const title = "About Page";
  const description =
    "Overall, Next.js makes web development easier, faster, and more efficient for building scalable applications.";
  const image =
    "https://img.sanishtech.com/u/2f447703b77ed53cdebfc60979cd8220.png";
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title:"hello about",
      description,
      url: url,
      siteName: "SSR Concept",
      images: [
        {
          url: image,
          alt: "About Image",
          width: 800,
          height: 630,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@ssrAboutConcept",
      title,
      description,
      images: [image],
    },
  };
}
export default function page() {
  return <>About page</>
}