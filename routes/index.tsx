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
    <div class="px-6 flex flex-col items-center min-h-screen">
      <Header />
      <main class="flex-1">{data ? <Cards cards={data} /> : <Err />}</main>
      <Footer />
    </div>
  );
}
