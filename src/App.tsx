import Enter from "./components/Enter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import lightBg from "./assets/lightBg.jpg";
import darkBg from "./assets/darkBg.jpg";
import { useState } from "react";
import Toggle from "./components/Toggle";
import { motion } from "framer-motion";

function App() {

  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className="h-screen relative overflow-hidden">

      {/* Light background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${lightBg})` }}
        animate={{
          opacity: darkMode ? 0 : 1,
          scale: darkMode ? 1.1 : 1,
        }}
        transition={{
          duration: 0.7,
        }}
      />

      {/* Dark background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${darkBg})` }}
        animate={{
          opacity: darkMode ? 1 : 0,
          filter: darkMode ? "blur(0px)" : "blur(5px)",
        }}
        transition={{
          duration: 0.7,
        }}
      
      />

      <motion.div
        className="absolute inset-0 bg-black/40"
        animate={{
          opacity: darkMode ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
      />


      <div className="relative z-10">
        <Header darkMode={darkMode} />
      </div>


      <div className="absolute top-4 right-10 z-10">
        <Toggle
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
      </div>


      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <Footer />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <Enter darkMode={darkMode}/>
      </div>
    </div>

  );
}
export default App;