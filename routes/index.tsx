/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Header from "@components/header/index.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md h-screen`}>
      <Header />
    </div>
  );
}
