import { Back } from "@/components/back";

export default function SSG() {
  console.log("ssg render");
  return (
    <div>
      <div>Hello World SSG</div>
      <Back />
    </div>
  );
}
