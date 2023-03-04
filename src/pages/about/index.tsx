import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Felix Liawi | About</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl font-serif">About Me</h1>
        <p className="my-5">
          Hello, I&apos;m Felix Liawi. Most people know me as <b>Liawi</b> or{" "}
          <b>潘建琿</b>.
        </p>
        <div className="prose text-neutral-800">
          <p>
            I am currently a Master&apos;s student in Computer Science and
            Information Engineering at National Taiwan University. My research
            primarily focuses on Machine Learning and Artificial Intelligence.
          </p>
          <p>
            I earned my Bachelor&apos;s degree in Computer Science from National
            Yang Ming Chiao Tung University, which was formerly known as
            National Chiao Tung University, in 2022.
          </p>
          <hr />
          <p>
            I enjoy learning about new developments in computer technology
            because I want to create something useful for my community. As a
            full stack developer and machine learning enthusiast, I strive to
            stay up-to-date with the latest advancements. My personal motto is
            that hard work will never betray you.
          </p>
          <p>
            I am interested in startups, which is why I have participated in
            several startup business competitions. Additionally, I am passionate
            about open-source projects, which embody the beauty of sharing.
          </p>
        </div>
      </section>
    </>
  );
}
