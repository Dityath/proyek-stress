import Head from "next/head";
import Image from "next/image";

import dynamic from "next/dynamic";

const WrappedSpline = dynamic(() => import("../spline/wrappedSpline"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Totoro</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <div className={"bg-black w-full h-screen"}>
        <WrappedSpline
          onLoad={() => <>Loading...</>}
          className={"w-40 h-52 bg-transparent"}
          scene={"https://prod.spline.design/xft5BVLLAtmd3W5P/scene.splinecode"}
        />
      </div>
    </>
  );
}
