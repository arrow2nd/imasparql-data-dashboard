import LinkButton from "@components/common/linkButton.tsx";

export default function Links() {
  return (
    <div class="space-x-2 md:space-x-4">
      <LinkButton title="im@sparql" href="https://sparql.crssnky.xyz/imas/">
        <i class="ti ti-database text-xl md:text-2xl" />
      </LinkButton>
      <LinkButton
        title="GitHub"
        href="https://github.com/arrow2nd/imasparql-data-dashboard"
      >
        <i class="ti ti-brand-github text-xl md:text-2xl" />
      </LinkButton>
    </div>
  );
}
