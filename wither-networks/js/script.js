// Create dynamic background elements
document.addEventListener('DOMContentLoaded', function() {
    const backgroundContainer = document.getElementById('background-elements');
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        createParticle();
    }
    
    // Function to create a particle
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 3px and 20px
        const size = Math.random() * 17 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 15s and 35s
        const duration = Math.random() * 20 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color variations
        const colors = [
            'rgba(106, 90, 249, 0.3)',
            'rgba(214, 110, 253, 0.3)',
            'rgba(80, 50, 150, 0.3)',
            'rgba(50, 80, 150, 0.3)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        particle.style.boxShadow = `0 0 20px ${randomColor.replace('0.3', '0.5')}`;
        
        backgroundContainer.appendChild(particle);
        
        // Remove particle after animation completes and create a new one
        setTimeout(() => {
            particle.remove();
            createParticle();
        }, duration * 1000);
    }
    
    // Server IP copy functionality
    const copyBtn = document.getElementById('copyBtn');
    const copyBtnText = document.getElementById('copyBtnText');
    const ipAddressElement = document.getElementById('ipAddress');
    
    if (copyBtn && ipAddressElement) {
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const text = ipAddressElement.textContent;
            
            // Modern clipboard API
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback
                copyBtn.classList.add('copied');
                copyBtnText.textContent = 'Copied!';
                
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtnText.textContent = 'Copy IP';
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                copyBtn.classList.add('copied');
                copyBtnText.textContent = 'Copied!';
                
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtnText.textContent = 'Copy IP';
                }, 2000);
            });
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Navigation link active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        // Prevent default link behavior
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const menuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Allow navigation but close menu
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside (on the overlay background)
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});