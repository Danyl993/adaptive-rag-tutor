export default function Card({ title, children }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/20">

      <h2 className="mb-5 text-xl font-bold text-slate-100">
        {title}
      </h2>

      <div className="text-slate-300">
        {children}
      </div>

    </div>
  );
}