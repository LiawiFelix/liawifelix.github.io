import Sidebar from "./sidebar";
import { Kaisei_Tokumin } from "next/font/google";
import clsx from "clsx";

const kaiseiTokumin = Kaisei_Tokumin({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-kaisei",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx("text-black bg-white", kaiseiTokumin.variable)}>
      {" "}
      <div className="max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <div className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
