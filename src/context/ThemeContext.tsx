
import React, { createContext, useContext, useState, useEffect } from "react";

// Define all available themes
export const THEMES = {
  default: {
    id: "default",
    name: "ขาว",
    primary: "235 100% 60%",
    secondary: "260 100% 65%",
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
  },
  dark: {
    id: "dark",
    name: "ดำ",
    primary: "235 100% 60%",
    secondary: "260 100% 65%",
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
  },
  blue: {
    id: "blue",
    name: "ฟ้า",
    primary: "210 100% 50%",
    secondary: "200 100% 60%",
    background: "210 50% 98%",
    foreground: "222.2 84% 4.9%",
  },
  purple: {
    id: "purple",
    name: "ม่วง",
    primary: "270 100% 50%",
    secondary: "280 100% 60%",
    background: "270 50% 98%",
    foreground: "222.2 84% 4.9%",
  },
  skyWhite: {
    id: "skyWhite",
    name: "ฟ้าขาว",
    primary: "200 100% 50%",
    secondary: "190 100% 60%",
    background: "200 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  blackRed: {
    id: "blackRed",
    name: "ดำแดง",
    primary: "0 100% 50%",
    secondary: "350 100% 60%",
    background: "0 0% 10%",
    foreground: "0 0% 98%",
  },
  darkPurple: {
    id: "darkPurple",
    name: "ม่วงอมดำ",
    primary: "280 100% 50%",
    secondary: "290 100% 60%",
    background: "280 30% 15%",
    foreground: "0 0% 98%",
  },
  pink: {
    id: "pink",
    name: "ชมพู",
    primary: "330 100% 60%",
    secondary: "320 100% 70%",
    background: "330 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  pinkWhite: {
    id: "pinkWhite",
    name: "ชมพูขาว",
    primary: "340 100% 65%",
    secondary: "330 100% 75%",
    background: "340 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  blackWhite: {
    id: "blackWhite",
    name: "ดำขาว",
    primary: "0 0% 0%",
    secondary: "0 0% 30%",
    background: "0 0% 100%",
    foreground: "0 0% 0%",
  },
  bluePurple: {
    id: "bluePurple",
    name: "น้ำเงินม่วง",
    primary: "240 100% 50%",
    secondary: "270 100% 60%",
    background: "240 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  green: {
    id: "green",
    name: "เขียว",
    primary: "120 100% 35%",
    secondary: "130 100% 45%",
    background: "120 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  rainbow: {
    id: "rainbow",
    name: "รุ้ง",
    primary: "0 100% 50%",
    secondary: "220 100% 60%",
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
  },
  pastelPinkYellow: {
    id: "pastelPinkYellow",
    name: "พาสเทล ชมพู-เหลือง",
    primary: "330 70% 80%",
    secondary: "50 70% 80%",
    background: "330 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  pastelBlueGreen: {
    id: "pastelBlueGreen",
    name: "พาสเทล ฟ้า-เขียว",
    primary: "200 70% 80%",
    secondary: "140 70% 80%",
    background: "200 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  pastelPurplePink: {
    id: "pastelPurplePink",
    name: "พาสเทล ม่วง-ชมพู",
    primary: "280 70% 80%",
    secondary: "330 70% 80%",
    background: "280 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
  pastelBluePurple: {
    id: "pastelBluePurple",
    name: "พาสเทล ฟ้า-ม่วง",
    primary: "200 70% 80%",
    secondary: "280 70% 80%",
    background: "200 30% 98%",
    foreground: "222.2 84% 4.9%",
  },
};

type Theme = keyof typeof THEMES;
type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  themes: typeof THEMES;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme && THEMES[savedTheme] ? savedTheme : "default";
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", currentTheme);
    
    // Apply theme to root element
    const theme = THEMES[currentTheme];
    
    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    
    // Apply special case for rainbow theme
    if (currentTheme === "rainbow") {
      document.body.classList.add("rainbow-theme");
    } else {
      document.body.classList.remove("rainbow-theme");
    }
  }, [currentTheme]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
