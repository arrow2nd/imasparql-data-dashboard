/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { CardDetail } from "@types/card.ts";

export default function Card({ title, count, icon }: CardDetail) {
  return (
    <div
      class={tw`px-8 py-4 w-80 md:w-96 h-32 flex flex-row justify-between items-center bg-card rounded-md shadow-sm`}
    >
      <span class={tw`space-y-1`}>
        <p class={tw`text-base`}>{title}</p>
        <p class={tw`font-medium text-4xl`}>
          {count}
          <span class={tw`ml-1 text-base`}>件</span>
        </p>
      </span>
      <i class={tw`ti ti-${icon} text-icon text-7xl`} />
    </div>
  );
}
