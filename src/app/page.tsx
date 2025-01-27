import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/123">
        <span className="underline text-sky-500">&nbsp;here&nbsp;</span>
      </Link>
      to go to document id
    </div>
  );
};

export default Home;
