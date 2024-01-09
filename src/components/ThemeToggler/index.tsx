"use client";

import { useEffect, useState } from "react";
import { MoonIcon } from "./moon";
import { SunIcon } from "./sun";
import { SystemIcon } from "./system";
import { useTheme } from "next-themes";

type ThemeType = "light" | "dark" | "system";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (chosenTheme: ThemeType) => {
    setTheme(chosenTheme);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  const renderTheme = (theme: ThemeType) => {
    switch (theme) {
      case "light":
        return (
          <>
            <SunIcon /> Light
          </>
        );
      case "dark":
        return (
          <>
            <MoonIcon /> Dark
          </>
        );
      case "system":
        return (
          <>
            <SystemIcon /> System
          </>
        );
      default:
        return (
          <>
            <SystemIcon /> System
          </>
        );
    }
  };
  const themes: ThemeType[] = ["light", "dark", "system"];
  return (
    <div className="dropdown dropdown-top mt-auto">
      <div tabIndex={0} role="button" className="btn btn-ghost w-full">
        {renderTheme(theme as ThemeType)}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
      >
        {themes.map((t) => (
          <li key={t}>
            <a onClick={() => handleClick(t)}>{renderTheme(t)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
