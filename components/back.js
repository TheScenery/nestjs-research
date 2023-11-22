import Link from "next/link";
import { useRouter } from "next/router";
export const Back = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <button onClick={() => router.push("/")}>Router Home</button>
      </div>

      <Link href="/">Link Home</Link>

      <div>
        <a href="/">Html link home</a>
      </div>
    </div>
  );
};
