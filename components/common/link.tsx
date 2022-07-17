/** @jsx h */
import { h, ComponentChildren } from "preact";

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
      class={props.class || ""}
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
