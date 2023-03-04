import Image from "next/image";
import MyImage from "@/avatar.jpg";
import NameAnimation from "@/components/nameAnimation";
import { GitHubIcon, LinkedinIcon } from "@/components/icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix Liawi</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl font-serif flex">
          Hi!
          <span className="ml-1">
            <NameAnimation />
          </span>
        </h1>

        <div className="flex items-start my-8 md:items-center flex-col md:flex-row">
          <Image
            className="rounded-full"
            alt="avatar"
            src={MyImage}
            width={100}
          />
          <div className="ml-0 md:ml-6">
            <p>Indonesian currently living in Taiwan</p>
            <p>Master student at National Taiwan University</p>
            <p>Full stack developer</p>
            <p>AI engineer to be 🚀️</p>
          </div>
        </div>
        <div className="flex flex-row">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/liawifelix"
          >
            <GitHubIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/felixliawi"
            className="ml-2"
          >
            <LinkedinIcon />
          </a>
        </div>
      </section>
    </>
  );
}
