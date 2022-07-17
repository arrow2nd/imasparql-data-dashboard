/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

interface LinkProps {
  class?: string;
  title: string;
  href: string;
  children: ComponentChildren;
}

export default function Link(props: LinkProps) {
  const { title, href, children } = props;

  return (
    <a
      class={tw`p-2 inline-flex items-center text(background sm) bg-text hover:bg-icon rounded-md shadow-sm transition-colors ${
        props.class || ""
      }`}
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
