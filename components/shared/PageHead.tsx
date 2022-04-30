import Head from "next/head";
import React from "react";

const PageHead = () => {
  return (
    <Head>
      <title>David Recheni CV</title>
      <meta
        name="description"
        content="My personal portfolio website built on Nextjs"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
