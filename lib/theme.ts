export function getInitialTheme(): 'light' | 'dark' {
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored as 'light' | 'dark';
  
    // Default: follow system preference
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    return prefersDark ? 'dark' : 'light';
  }
  
  export function applyTheme(theme: 'light' | 'dark') {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
  