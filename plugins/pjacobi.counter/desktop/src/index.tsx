import type { Context } from "@wabifi/author";
import { summary } from "../../core/summary";

export const inject = ["react", "pages"];

export function apply(ctx: Context) {
  const React = ctx.react;
  ctx.pages.register({
    id: "main",
    title: "Counter",
    primary: true,
    component: function Page() {
      const [count, setCount] = React.useState(0);
      const [quote, setQuote] = React.useState("");
      // 0.1.1 reaches an origin the manifest doesn't declare, on purpose: it tests that the
      // automatic review rejects it and that an appeal reaches a person.
      const getQuote = async () => {
        const answer = await fetch("https://api.quotable.io/random");
        setQuote(((await answer.json()) as { content?: string }).content ?? "");
      };
      return (
        <section className="ui-card" style={{ padding: "var(--space-panel-inset)" }}>
          <h1>Counter</h1>
          <p>{summary("pjacobi.counter")}</p>
          <button type="button" onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
          <button type="button" onClick={() => void getQuote()}>
            Show a quote
          </button>
          {quote ? <p>{quote}</p> : null}
        </section>
      );
    },
  });
}
