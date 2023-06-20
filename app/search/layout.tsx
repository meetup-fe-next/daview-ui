export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="mb-8 text-5xl">search page</h1>
      {children}
    </div>
  );
}
