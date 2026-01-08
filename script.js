// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const professions = ['Web Developer', 'Digital Marketing Specialist', 'Tech Speaker', 'Fresh Graduate'];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            typingText.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentProfession.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    if (typingText) {
        setTimeout(typeWriter, 1000);
    }

    // Smooth Scroll Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                closeMobileMenu();
            }
        });
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('skill-category')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 200);
                }
                
                if (entry.target.classList.contains('timeline')) {
                    entry.target.classList.add('animate');
                }
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const revealElements = document.querySelectorAll('.reveal-item, .section-title, .timeline, .skill-category, .portfolio-item');
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Navbar Scroll Effect
    const header = document.querySelector('.header');
    
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        }
        
        updateActiveNavLink();
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    // Throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    // Portfolio Hover Effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill Cards Hover Effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
            this.style.background = 'rgba(59, 130, 246, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = 'rgba(15, 23, 42, 0.8)';
        });
    });

    // Contact Button Effects
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Avatar hover effect
    const avatarImage = document.querySelector('.avatar-image');
    if (avatarImage) {
        avatarImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        avatarImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Statistics Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));
                
                animateCounter(target, finalValue);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }

    // Tech badges hover effect
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:white;border:none;font-size:1.2rem;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s ease;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .scroll-to-top:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
    `;
    document.head.appendChild(style);

    console.log('Portfolio website loaded successfully!');
});

    // WhatsApp Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !message) {
                alert('Mohon isi semua field yang diperlukan!');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Format email tidak valid!');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Halo! Saya ${name}%0A%0A` +
                                  `Email: ${email}%0A%0A` +
                                  `Pesan:%0A${message}%0A%0A` +
                                  `Terima kasih!`;
            
            // WhatsApp number (replace with your actual number)
            const whatsappNumber = '6285741850067';
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="btn-icon">⏳</span><span>Mengirim...</span>';
            submitBtn.disabled = true;
            
            // Simulate sending delay for better UX
            setTimeout(() => {
                // Open WhatsApp
                window.open(whatsappURL, '_blank');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Pesan berhasil disiapkan! WhatsApp akan terbuka.', 'success');
            }, 1000);
        });
    }
    
    // Notification function
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Notification styles
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            font-weight: 500;
            font-size: 0.9rem;
            max-width: 300px;
            transform: translateX(100%);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }
    
    // Form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Add CSS for form animations
    const formStyle = document.createElement('style');
    formStyle.textContent = `
        .form-group.focused label {
            color: var(--accent-blue);
            transform: translateY(-2px);
        }
        
        .form-group label {
            transition: all 0.3s ease;
        }
        
        .notification {
            animation: slideInRight 0.3s ease;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(formStyle);

// ===== PORTFOLIO CATEGORY FUNCTIONALITY =====
function showCategory(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const activeBtn = document.querySelector(`[onclick="showCategory('${category}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Show/hide portfolio items
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('visible');
            }, 100);
        } else {
            card.classList.remove('visible');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Show all items by default
    showCategory('all');
    
    // Add reveal animation to portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
});

// ===== METEOR RAIN ANIMATION =====
function createMeteor() {
    const meteorContainer = document.querySelector('.meteor-container');
    if (!meteorContainer) return;
    
    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    // Random position and animation duration
    const leftPosition = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 2; // 2-5 seconds
    const delay = Math.random() * 2; // 0-2 seconds delay
    
    meteor.style.left = leftPosition + '%';
    meteor.style.animationDuration = animationDuration + 's';
    meteor.style.animationDelay = delay + 's';
    
    meteorContainer.appendChild(meteor);
    
    // Remove meteor after animation
    setTimeout(() => {
        if (meteor.parentNode) {
            meteor.parentNode.removeChild(meteor);
        }
    }, (animationDuration + delay) * 1000);
}

// Create meteors periodically
function startMeteorRain() {
    setInterval(createMeteor, 800); // Create new meteor every 800ms
}

// Initialize meteor rain
document.addEventListener('DOMContentLoaded', () => {
    startMeteorRain();
});

// ===== FLOATING PARTICLES ANIMATION =====
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        const randomTop = Math.random() * window.innerHeight;
        const randomDelay = Math.random() * 6;
        
        particle.style.top = randomTop + 'px';
        particle.style.animationDelay = randomDelay + 's';
    });
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    animateParticles();
    
    // Re-animate particles on window resize
    window.addEventListener('resize', animateParticles);
});

// ===== ENHANCED SCROLL ANIMATIONS =====
// Enhanced reveal animation with stagger effect
function enhancedRevealAnimation() {
    const revealElements = document.querySelectorAll('.reveal-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger animation by 100ms
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    enhancedRevealAnimation();
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = throttle(() => {
    handleScroll();
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Optimized resize handler
const optimizedResizeHandler = debounce(() => {
    animateParticles();
}, 250);

window.addEventListener('resize', optimizedResizeHandler);