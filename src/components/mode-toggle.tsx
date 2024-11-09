"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false)
    
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  React.useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 hover:bg-muted transition-colors relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 left-2 top-2" />
    </button>
  )
} 