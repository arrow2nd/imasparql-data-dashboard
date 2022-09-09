import { JSX } from "preact";
import Link from "@components/Link.tsx";

export default function LinkButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Link
      {...props}
      class={`p-2 inline-flex items-center text(background sm) bg-text hover:bg-icon rounded-md shadow-sm transition-colors ${
        props.class || ""
      }`}
    >
      {props.children}
    </Link>
  );
}
