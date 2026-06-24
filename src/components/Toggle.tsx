import { motion } from "framer-motion"
import { HiSun, HiMoon } from "react-icons/hi"
import useIsMobile from "../styles/mobile"

interface ToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Toggle({ darkMode, toggleTheme }: ToggleProps) {
  const isMobile = useIsMobile();

  return (
    <button
    onClick={toggleTheme}
    className={`w-10 h-12 md:h-16 flex items-center justify-center rounded-full backdrop-blur-xl border transition hover:shadow-lg
        ${
        darkMode
            ? "bg-orange-200/10 border-white/20"
            : "bg-sky-200/10 border-white/20"
        }
    `}
    >
    {/* Track */}
    <div className="relative w-full h-full flex items-center justify-center">

        <motion.div
            animate={{
                y: darkMode
                ? (isMobile ? 6 : 12)
                : (isMobile ? -6 : -12),
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
            }}
            className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md
                ${
                darkMode
                    ? "bg-white/10 text-yellow-100/90"
                    : "bg-white/10 text-white"
                }
            `}
            >
            {darkMode ? <HiMoon size={14} /> : <HiSun size={14} />}
        </motion.div>
    </div>
    </button>
  )
}