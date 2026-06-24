import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import bg from "./assets/bg.jpg";
import { useState } from "react";
import Toggle from "./components/Toggle";

function App() {

  const [darkMode,setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen bg-cover bg-center relative ${darkMode ? "bg-[#16171d]" : "bg-white"}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <Header darkMode={true} />
        <Toggle
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
        <About />
        <Footer />
      </div>
    </div>
  );
}
export default App;