import { Button } from "@/components/ui/button";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"/logo.png"} height={70} width={70} alt="Logo" />
    </div>
  );
};

export default Logo;
