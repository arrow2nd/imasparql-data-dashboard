/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head, asset } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset(
            "https://api.fonts.coollabs.io/css2?family=M+PLUS+Rounded+1c:wght@400;500&display=swap"
          )}
        />
        <link
          rel="stylesheet"
          href={asset(
            "https://cdn.jsdelivr.net/npm/@tabler/icons@1.76.0/iconfont/tabler-icons.min.css"
          )}
        />
        <link rel="stylesheet" href={asset("./globals.css")} />
      </Head>
      <div class={tw`text-text bg-background font-default`}>
        <props.Component />
      </div>
    </>
  );
}
