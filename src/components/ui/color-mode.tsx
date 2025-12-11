"use client"

import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { theme, setTheme } = useTheme()
  return {
    colorMode: theme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode: () => {
      setTheme(theme === "light" ? "dark" : "light")
    },
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { theme } = useTheme()
  return theme === "light" ? light : dark
}
