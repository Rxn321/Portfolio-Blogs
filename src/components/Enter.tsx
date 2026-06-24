import { getTheme } from "../styles/theme";

function Enter({ darkMode }: { darkMode: boolean }) {
  const theme = getTheme(darkMode);

  return (
    <section className="max-w-xl mx-auto px-6 py-100">
      <div className="flex flex-col items-center gap-6">
        <h1 className={`text-3xl font-thin tracking-widest ${theme.text}`}>
          Things I've been larping
        </h1>

        <button className="px-8 py-2 rounded-full border-2 border-white bg-transparent text-white flex items-center gap-2 text-lg font-medium hover:bg-gray-200/20 transition">
          Enter
        </button>
      </div>
    </section>

  );
}

export default Enter;