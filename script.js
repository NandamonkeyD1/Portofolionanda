// ===== NASA-INSPIRED PORTFOLIO JAVASCRIPT - REFINED =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== TYPING ANIMATION - REFINED =====
    const typingRole = document.querySelector('.typing-role');
    const roles = [
        'Software Engineer',
        'Web Developer',
        'UI/UX Designer',
        'Digital Marketing Strategist'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingRole.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingRole.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 90;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 600;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    setTimeout(typeWriter, 1800);

    // ===== METEOR SHOWER - OPTIMIZED =====
    function createMeteor() {
        const meteorField = document.querySelector('.meteor-field');
        if (!meteorField) return;
        
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.animationDuration = (Math.random() * 2 + 3) + 's';
        meteor.style.animationDelay = Math.random() * 3 + 's';
        
        meteorField.appendChild(meteor);
        
        setTimeout(() => {
            meteor.remove();
        }, 6000);
    }

    // OPTIMIZED: Reduced frequency from 4s to 8s
    setInterval(createMeteor, 8000);

    // ===== SHOOTING STARS (Background) - OPTIMIZED =====
    function createShootingStar() {
        const shootingStars = document.querySelector('.shooting-stars');
        if (!shootingStars) return;
        
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Random starting position
        star.style.top = Math.random() * 50 + '%';
        star.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        shootingStars.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    // OPTIMIZED: Reduced frequency from 4s to 10s
    setInterval(createShootingStar, 10000);
    
    // Create initial shooting star (reduced from 3 to 1)
    setTimeout(createShootingStar, 1000);

    // ===== AVATAR PARTICLES =====
    function createAvatarParticle() {
        const particlesContainer = document.querySelector('.avatar-particles');
        if (!particlesContainer) return;
        
        const particle = document.createElement('div');
        particle.className = 'avatar-particle';
        
        // Random position around the circle
        const angle = Math.random() * Math.PI * 2;
        const radius = 140; // Half of avatar-particles width
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        particle.style.left = `calc(50% + ${x}px)`;
        particle.style.top = `calc(50% + ${y}px)`;
        
        // Random color (cyan or purple)
        const colors = ['var(--galaxy-cyan)', 'var(--glow-purple)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }

    // Create particles around avatar
    setInterval(createAvatarParticle, 1500);
    
    // Create initial particles
    for (let i = 0; i < 3; i++) {
        setTimeout(createAvatarParticle, i * 500);
    }

    // ===== NAVIGATION =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ===== SCROLL ANIMATIONS - REFINED =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.impact-stat, .highlight-card, .skill-module, .timeline-entry, .project-module').forEach(el => {
        observer.observe(el);
    });

    // ===== COUNTER ANIMATION - REFINED =====
    const statValues = document.querySelectorAll('.stat-value');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    statValues.forEach(stat => statsObserver.observe(stat));

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60;
        const duration = 2000;
        const stepTime = duration / 60;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (target > 10 ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    // ===== SKILL BARS ANIMATION - REFINED =====
    const skillBars = document.querySelectorAll('.bar-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                setTimeout(() => {
                    entry.target.style.width = level + '%';
                }, 200);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ===== WORK FILTERS - REFINED =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectModules = document.querySelectorAll('.project-module');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            projectModules.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('visible'), 150);
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => card.style.display = 'none', 400);
                }
            });
        });
    });

    // ===== CONTACT FORM - REFINED =====
    const contactForm = document.getElementById('contactForm');
    
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'warning');
            return;
        }
        
        const whatsappMessage = `Hello! I'm ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}%0A%0AThank you!`;
        const whatsappNumber = '6285741850067';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        window.open(whatsappURL, '_blank');
        contactForm.reset();
        
        showNotification('Message prepared! Opening WhatsApp...', 'success');
    });

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${type === 'success' ? 'linear-gradient(135deg, #4a9eff, #5ba3ff)' : 'linear-gradient(135deg, #ff6b6b, #ff8e8e)'};
            color: white;
            padding: 1.2rem 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(74, 158, 255, 0.4);
            z-index: 10000;
            font-weight: 500;
            animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => notification.remove(), 400);
        }, 4000);
    }

    // ===== SMOOTH SCROLL - REFINED =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== SCROLL TO TOP - REFINED =====
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2.5rem;
        right: 2.5rem;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4a9eff, #5ba3ff);
        color: white;
        border: none;
        font-size: 1.6rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(74, 158, 255, 0.4);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-4px) scale(1.05)';
        scrollBtn.style.boxShadow = '0 8px 30px rgba(74, 158, 255, 0.6)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0) scale(1)';
        scrollBtn.style.boxShadow = '0 4px 20px rgba(74, 158, 255, 0.4)';
    });

    console.log('🚀 NASA-Inspired Portfolio Loaded Successfully!');
});
