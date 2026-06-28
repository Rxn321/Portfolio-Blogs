import { getTheme } from "../styles/theme";
import useIsMobile from "../styles/mobile"

function Header({ darkMode }: { darkMode: boolean }) {
  const isMobile = useIsMobile();
  const theme = getTheme(darkMode);

  return (
    <section className={`h-screen flex flex-col items-center pt-5 text-center`}>

      <h1 className={`font-thin tracking-widest ${theme.text}
      ${isMobile ? "text-4xl" : "text-5xl"}`}>
        Ryan Liu
      </h1>
    </section>
  );
}

export default Header;