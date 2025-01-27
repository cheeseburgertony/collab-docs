import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavBar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <NavBar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
      </div>
    </div>
  );
};

export default Home;
