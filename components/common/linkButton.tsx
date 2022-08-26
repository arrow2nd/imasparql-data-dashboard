/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Link, { LinkProps } from "@components/common/link.tsx";

export default function LinkButton(props: LinkProps) {
  const { title, href, children } = props;

  return (
    <Link
      class={tw`p-2 inline-flex items-center text(background sm) bg-text hover:bg-icon rounded-md shadow-sm transition-colors ${
        props.class || ""
      }`}
      title={title}
      href={href}
    >
      {children}
    </Link>
  );
}
