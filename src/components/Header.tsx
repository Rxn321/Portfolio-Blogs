import { getTheme } from "../styles/theme";

function Header({ darkMode }: { darkMode: boolean }) {

  const theme = getTheme(darkMode);

  return (
    <section className={`h-screen flex flex-col items-center pt-5 text-center`}>

      <h1 className={`text-5xl font-thin tracking-widest ${theme.text}`}>
        Ryan Liu
      </h1>
    </section>
  );
}

export default Header;