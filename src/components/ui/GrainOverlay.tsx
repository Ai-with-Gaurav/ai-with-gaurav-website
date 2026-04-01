export default function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"
      style={{ backgroundImage: "url('/noise.svg')" }}
      aria-hidden="true"
    />
  );
}
