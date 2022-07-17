/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Card, { CardProps } from "./card.tsx";

export default function Cards({ cards }: { cards: CardProps[] }) {
  return (
    <div class={tw`mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}
