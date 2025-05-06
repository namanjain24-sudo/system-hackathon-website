/**
 * Handles the theme toggle functionality (dark/light mode)
 */
export function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on user preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      updateThemeIcon(true);
    } else {
      document.body.classList.remove('dark-mode');
      updateThemeIcon(false);
    }
    
    // Handle theme toggle click
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update icon
        updateThemeIcon(isDarkMode);
      });
    }
    
    // Update theme toggle icon
    function updateThemeIcon(isDarkMode) {
      if (!themeToggle) return;
      
      const icon = themeToggle.querySelector('i');
      
      if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.body.classList.add('dark-mode');
          updateThemeIcon(true);
        } else {
          document.body.classList.remove('dark-mode');
          updateThemeIcon(false);
        }
      }
    });
  }