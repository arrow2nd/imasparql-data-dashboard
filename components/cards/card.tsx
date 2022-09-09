import { CardDetail } from "@interfaces/card.ts";

/**
 * @params CardDetail カードの詳細
 */
export default function Card({ title, count, icon }: CardDetail) {
  return (
    <div class="px-8 py-4 w-80 md:w-96 h-32 flex flex-row justify-between items-center bg-card rounded-md shadow-sm">
      <span class="space-y-1">
        <p class="text-sm md:text-base">{title}</p>
        <p class="font-medium text-3xl md:text-4xl">
          {count}
          <span class="ml-1 text-sm md:text-base">件</span>
        </p>
      </span>
      <i class={`ti ti-${icon} text-icon text-6xl md:text-7xl`} />
    </div>
  );
}
