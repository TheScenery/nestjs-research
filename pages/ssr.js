import { Back } from "@/components/back";

export default function SSR() {
  console.log("ssr render");
  return (
    <div>
      <div>Hello World SSR</div>
      <Back />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  console.log("server side props");

  // Pass data to the page via props
  return { props: { data: "server side props" } };
}
