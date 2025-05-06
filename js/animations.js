export function setupAnimations() {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Apply to section titles
    document.querySelectorAll('.section-title').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
    
    // Apply to cards
    document.querySelectorAll('.card').forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
    
    // Apply to stat cards
    document.querySelectorAll('.stat-card').forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      observer.observe(el);
    });
    
    // Add animated class when elements come into view
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.animated').forEach(el => {
        observer.observe(el);
      });
    });
    
    // Custom animation handling
    const addAnimatedClass = (target) => {
      target.classList.add('animated');
    };
    
    // Set animation class for already visible elements
    setTimeout(() => {
      document.querySelectorAll('.section-title, .card, .stat-card').forEach(el => {
        if (isElementInViewport(el)) {
          addAnimatedClass(el);
        }
      });
    }, 300);
    
    // Utility function to check if element is in viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
      );
    }
    
    // Apply animation to already animated elements
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.animated').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }