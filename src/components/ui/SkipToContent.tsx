export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[10000] -translate-y-20 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-dark-900 transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
