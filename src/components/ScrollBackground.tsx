

export default function ScrollBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div className="blueprint-grid" />
      <div className="grainy" />
    </div>
  );
}
