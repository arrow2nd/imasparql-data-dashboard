/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import Cards from "@components/cards/index.tsx";
import Err from "@components/error/index.tsx";
import Header from "@components/header/index.tsx";
import Footer from "@components/footer/index.tsx";

import { fetchCardDetails } from "@libs/fetch.ts";

import { CardDetail } from "@interfaces/card.ts";

export const handler: Handlers<CardDetail[]> = {
  async GET(_req, ctx) {
    const cards = await fetchCardDetails();
    return ctx.render(cards);
  },
};

export default function Home({ data }: PageProps<CardDetail[] | undefined>) {
  return (
    <div class={tw`p-4 flex flex-col items-center min-h-screen`}>
      <Header />
      <main class={tw`flex-1`}>{data ? <Cards cards={data} /> : <Err />}</main>
      <Footer />
    </div>
  );
}
