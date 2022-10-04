import Head from "next/head";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <Head>
        <title>Recipes Veggie</title>
      </Head>
      <h1>This is Veggie page</h1>
      <Image
        src="/images/unsplash.jpg"
        alt="unsplash"
        layout="responsive"
        width={2400}
        height={1596}
      />
    </>
  );
}
