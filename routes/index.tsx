import { Head } from "$fresh/runtime.ts";
import { ScrollGame } from "../islands/ScrollGame/main.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Final Chapter</title>
      </Head>
      <ScrollGame />
    </>
  );
}
