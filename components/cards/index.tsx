import Card from "@components/cards/card.tsx";

import { CardDetail } from "@interfaces/card.ts";

type Props = {
  cards: CardDetail[];
};

export default function Cards({ cards }: Props) {
  return (
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}
