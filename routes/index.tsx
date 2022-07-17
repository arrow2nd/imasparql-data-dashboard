/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Header from "@components/header/index.tsx";
import Cards from "@components/cards/index.tsx";
import Footer from "@components/footer/index.tsx";

export default function Home() {
  // TODO: im@sparqlからデータを取得して生成する
  const catds = [
    {
      title: "アイドル",
      count: "335",
      icon: "user",
    },
    {
      title: "ユニット",
      count: "1520",
      icon: "users",
    },
    {
      title: "ボイスアイドルオーディション",
      count: "6",
      icon: "microphone-2",
    },
    {
      title: "呼び名",
      count: "5923",
      icon: "messages",
    },
  ];

  return (
    <div class={tw`p-4 flex flex-col items-center min-h-screen`}>
      <Header />
      <main class={tw`flex-1`}>
        <Cards cards={catds} />
      </main>
      <Footer />
    </div>
  );
}
