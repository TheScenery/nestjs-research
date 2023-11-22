import { Back } from "@/components/back";
import { useEffect } from "react";

export default function csr() {
  console.log("csr render");

  useEffect(() => {
    console.log("use effect run");
  });

  return (
    <div>
      <div>Hello World CSR</div>
      <Back />
    </div>
  );
}
