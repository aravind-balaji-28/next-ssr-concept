import ButtonClient from "@/app/components/ButtonClient";

export default function Page() {
  const message = "This page is built at build time";
  const subTitle = "Static Site Generation (SSG) Example";
  return <div>
    <h1>{message} {subTitle}</h1>
    <ButtonClient/>
  </div>
}
