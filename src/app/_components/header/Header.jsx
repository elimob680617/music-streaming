import Link from "next/link";
import { TopNavigation } from "./TopNavigation";
import DarkModeToggle from "./DarkLightModeToggle";

export const Header = () => {
  return (
    <header className="flex border-b dark:border-slate-400 dark:border-opacity-5 items-center justify-center px-8">
      <div className="container flex items-center justify-start">
        <DarkModeToggle />
        <Link href={"/"} className="mr-auto ml-2">
          Music stream
        </Link>

        <TopNavigation />
      </div>
    </header>
  );
};
