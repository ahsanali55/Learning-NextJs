"use client"

import { createContext, useContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export default function ThemeProvider({children}) {
    const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem("isDark") === "false" ? false : true));
    localStorage.setItem("isDark", isDark)
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [isDark])

    const themeChange = () => {
        setisDark(!isDark)
    }

  return (
    <ThemeContext.Provider value={{isDark, themeChange}}>
        {children}
      
    </ThemeContext.Provider>
  )
}
