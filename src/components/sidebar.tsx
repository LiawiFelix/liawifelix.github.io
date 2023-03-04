import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemData {
  name: string;
  x: number;
  y: number;
  w: string;
}

const navItems: Record<string, NavItemData> = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 64,
    y: 35,
    w: "65px",
  },
  "/projects": {
    name: "projects",
    x: 132,
    y: 70,
    w: "80px",
  },
};

export default function Sidebar() {
  let pathName: string = usePathname() || "/";

  if (!(pathName in navItems)) {
    return null;
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 md:mx-0 md:px-0 mx-4 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <div className="hidden md:block">
              <motion.div
                className="absolute bg-neutral-100 h-[34px] rounded-md z-[-1]"
                initial={{ opacity: 0, y: navItems[pathName].y }}
                animate={{
                  opacity: 1,
                  y: navItems[pathName].y,
                  width: navItems[pathName].w,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            </div>
            <div className="block md:hidden">
              <motion.div
                className="absolute bg-neutral-100 h-[34px] rounded-md z-[-1]"
                initial={{ opacity: 0, x: navItems[pathName].x }}
                animate={{
                  opacity: 1,
                  x: navItems[pathName].x,
                  width: navItems[pathName].w,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            </div>
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathName;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all hover:text-neutral-800 py-[5px] px-[10px]",
                    {
                      "text-neutral-500": !isActive,
                      "font-bold": isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
