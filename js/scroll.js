/**
 * Handles smooth scrolling functionality
 */
export function setupScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Handle scroll indicator in hero section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const nextSection = document.querySelector('.hero + section');
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
    
    // Show/hide scroll-to-top button on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Could add a scroll-to-top button here if desired
      if (scrollY > 500) {
        // Show scroll-to-top button logic would go here
      } else {
        // Hide scroll-to-top button logic would go here
      }
    });
  }
  