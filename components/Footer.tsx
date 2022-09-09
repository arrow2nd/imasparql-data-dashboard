import Link from "@components/Link.tsx";

export default function Footer() {
  return (
    <div class="p-12 w-full flex justify-center text-icon">
      <Link href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      </Link>
    </div>
  );
}
