import { Button } from "@/components/ui/button";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/logo.png"}
        height={80}
        width={80}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.png"}
        height={80}
        width={80}
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
