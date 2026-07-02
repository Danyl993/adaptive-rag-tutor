export default function PageLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  );
}