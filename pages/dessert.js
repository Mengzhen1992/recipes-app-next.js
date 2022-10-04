import Head from "next/head";
import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <Head>
        <title>Recipes Dessert</title>
      </Head>
      <h1>This is Dessert page</h1>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="dessert"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}
