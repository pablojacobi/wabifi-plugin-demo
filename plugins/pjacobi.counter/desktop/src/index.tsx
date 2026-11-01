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
      return (
        <section className="ui-card" style={{ padding: "var(--space-panel-inset)" }}>
          <h1>Counter</h1>
          <p>{summary("pjacobi.counter")}</p>
          <button type="button" onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
          <button type="button" onClick={() => setCount(0)} disabled={count === 0}>
            Reset
          </button>
        </section>
      );
    },
  });
}
