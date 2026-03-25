// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#004791',
                    dark: '#0f172a',
                    gray: '#9CA3AF',
                    light: '#F9FAFB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            }
        }
    }
}

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Stats Counter Animation
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + (counter.getAttribute('data-suffix') || '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + (counter.getAttribute('data-suffix') || '');
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(el => {
        statsObserver.observe(el);
    });

    // Navbar Scroll Effect & Smart Hide/Show
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Glass effect
        if (currentScroll > 50) {
            navbar.classList.add('glass-nav-scrolled');
        } else {
            navbar.classList.remove('glass-nav-scrolled');
        }

        // Smart Hide/Show (Show on scroll up, hide on scroll down)
        if (currentScroll > 500) {
            if (currentScroll > lastScroll) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
        } else {
            navbar.classList.remove('nav-hidden');
        }
        lastScroll = currentScroll;
    });

    // Scroll Spy (Active Link Highlighting)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.md\\:flex a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active-link");
            const href = link.getAttribute("href");
            // Only add active-link if we have a current section AND it's not the CTA button (bg-brand-blue)
            if (current && href === "#" + current && !link.classList.contains('bg-brand-blue')) {
                link.classList.add("active-link");
            }
        });
    });

    // Mobile Menu Logic
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Optional: Toggle icon between menu and x
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                const isHidden = mobileMenu.classList.contains('hidden');
                icon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
                lucide.createIcons();
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            });
        });
    }
});
