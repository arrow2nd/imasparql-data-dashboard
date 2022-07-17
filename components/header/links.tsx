/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import LinkButton from "@components/common/linkButton.tsx";

export default function Links() {
  return (
    <div class={tw`space-x-2 md:space-x-4`}>
      <LinkButton title="im@sparql" href="https://sparql.crssnky.xyz/imas/">
        <i class={tw`ti ti-database text-xl md:text-2xl`} />
      </LinkButton>
      <LinkButton
        title="GitHub"
        href="https://github.com/arrow2nd/imasparql-data-dashboard"
      >
        <i class={tw`ti ti-brand-github text-xl md:text-2xl`} />
      </LinkButton>
    </div>
  );
}
