import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className='inline-flex items-center justify-center w-11 h-11 rounded-md text-muted-foreground hover:text-brand hover:bg-secondary/50 transition-colors'
    >
      {isDark
        ? <Sun size={20} aria-hidden='true' />
        : <Moon size={20} aria-hidden='true' />}
    </button>
  )
}

export default ThemeToggle
