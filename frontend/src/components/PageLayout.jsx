export default function PageLayout({ children }) {
  return (
    <main className="min-h-screen p-4">
      <div className="w-full">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 backdrop-blur-md shadow-2xl p-8 md:p-10">

          {children}

        </div>
      </div>
    </main>
  );
}