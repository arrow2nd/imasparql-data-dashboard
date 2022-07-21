/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Error() {
  return (
    <div class={tw`px-8 py-4 flex items-center text(lg red-600)`}>
      <i class={tw`ti ti-mood-cry text-2xl`} />
      <span class={tw`ml-2`}>データが取得できませんでした</span>
    </div>
  );
}
