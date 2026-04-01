import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold text-text-primary sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold text-text-primary"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-text-primary"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-text-muted leading-relaxed" {...props} />
  ),
  a: (props) => (
    <a
      className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-text-muted" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-2 text-text-muted"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-primary/50 bg-dark-800 py-4 pl-6 pr-4 rounded-r-lg text-text-muted italic"
      {...props}
    />
  ),
  code: (props) => {
    const isInline = !props.className;
    if (isInline) {
      return (
        <code
          className="rounded bg-dark-700 px-1.5 py-0.5 text-sm font-mono text-primary"
          {...props}
        />
      );
    }
    return <code className="font-mono text-sm" {...props} />;
  },
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-dark-800 border border-dark-600 p-4 text-sm"
      {...props}
    />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 rounded-xl" alt={props.alt || ""} {...props} />
  ),
  hr: () => (
    <hr className="my-8 border-dark-600" />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm text-text-muted" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-dark-600 px-4 py-2 text-left font-semibold text-text-primary"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-dark-700 px-4 py-2" {...props} />
  ),
  Callout: ({
    type = "info",
    children,
  }: {
    type?: "info" | "warning" | "tip";
    children: React.ReactNode;
  }) => {
    const styles = {
      info: "border-blue-500/30 bg-blue-500/5 text-blue-300",
      warning: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
      tip: "border-green-500/30 bg-green-500/5 text-green-300",
    };
    const labels = { info: "Info", warning: "Warning", tip: "Tip" };
    return (
      <div
        className={`my-6 rounded-xl border p-4 ${styles[type]}`}
      >
        <p className="mb-1 text-sm font-semibold">{labels[type]}</p>
        <div className="text-sm text-text-muted">{children}</div>
      </div>
    );
  },
};

export default components;
