export default function PageLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      {children}
    </main>
  );
}