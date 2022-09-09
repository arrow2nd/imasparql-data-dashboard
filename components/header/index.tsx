import Logo from "@components/header/logo.tsx";
import Links from "@components/header/links.tsx";

export default function Header() {
  return (
    <div class="w-full px-4 py-10 flex flex-row justify-between items-center">
      <Logo />
      <Links />
    </div>
  );
}
