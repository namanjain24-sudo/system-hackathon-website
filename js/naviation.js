/**
 * Handles the website navigation functionality
 */
export function setupNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile navigation
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle hamburger/close icon
        const icon = mobileNavToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
    
    // Close mobile navigation when link is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        
        // Reset hamburger icon
        const icon = mobileNavToggle?.querySelector('i');
        if (icon && icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
        
        // Update active link
        navItems.forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
      });
    });
    
    // Update active navigation based on scroll position
    const updateActiveNavOnScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${sectionId}`) {
              item.classList.add('active');
            }
          });
        }
      });
      
      // If at the top of the page, activate Home link
      if (scrollPosition < 200) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.textContent === 'Home') {
            item.classList.add('active');
          }
        });
      }
    };
    
    window.addEventListener('scroll', updateActiveNavOnScroll);
    
    // Handle header background change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });
  }