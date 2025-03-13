"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { THEME_TYPES } from "@/constants";

const Theme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>();

  const handleChangeTheme = () => {
    setTheme(theme === THEME_TYPES.DARK ? THEME_TYPES.LIGHT : THEME_TYPES.DARK);
  };

  useEffect(() => {
    const isDarkTheme =
      theme === THEME_TYPES.DARK ||
      (systemTheme === THEME_TYPES.DARK && theme === THEME_TYPES.SYSTEM);

    setIsDarkTheme(isDarkTheme);
  }, [theme]);

  if (isDarkTheme === undefined) return null;

  return (
    <div onClick={handleChangeTheme} className={"cursor-pointer"}>
      {isDarkTheme && (
        <Image src={"/icons/sun.svg"} alt={"sun"} width={20} height={20} />
      )}
      {!isDarkTheme && (
        <Image src={"/icons/moon.svg"} alt={"moon"} width={20} height={20} />
      )}
    </div>
  );
};

export default Theme;
