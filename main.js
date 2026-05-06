// Main Logic for Mateus Cruz Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect Logic
    const typingText = document.getElementById('typing-text');
    const skills = [
        { text: 'Music Producer', icon: '🎵' },
        { text: 'Rapper', icon: '🎤' },
        { text: 'Robotics Enthusiast', icon: '🤖' },
        { text: 'Skilled Cook', icon: '🍳' },
        { text: 'Science Fiction Lover', icon: '🚀' },
        { text: 'Christian', icon: '⛪' },
        { text: 'Bookworm', icon: '📚' }
    ];

    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentSkill = skills[skillIndex];
        const fullText = `${currentSkill.icon} ${currentSkill.text}`;

        if (isDeleting) {
            typingText.textContent = fullText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = fullText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === fullText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();

    // 2. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // 3. Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Custom Rocket Cursor Logic
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Position the rocket cursor
        customCursor.style.left = `${mouseX}px`;
        customCursor.style.top = `${mouseY}px`;
    });

    // 6. Bouncing 3D Pyramid Logic
    const bouncingPyramid = document.getElementById('bouncing-pyramid-container');
    const pyramid = document.querySelector('.pyramid');
    
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    let rotation = 0;

    function animatePyramid() {
        // Update positions
        x += dx;
        y += dy;
        rotation += 0.5;

        // Bounce off walls
        if (x + 150 > window.innerWidth || x < 0) {
            dx = -dx;
        }
        if (y + 150 > window.innerHeight || y < 0) {
            dy = -dy;
        }

        // Apply styles
        bouncingPyramid.style.left = `${x}px`;
        bouncingPyramid.style.top = `${y}px`;
        
        if (pyramid) {
            pyramid.style.transform = `rotateY(${rotation}deg) rotateX(${rotation / 2}deg)`;
        }

        requestAnimationFrame(animatePyramid);
    }

    animatePyramid();

    // Visibility handlers for cursor
    document.addEventListener('mouseleave', () => { customCursor.style.display = 'none'; });
    document.addEventListener('mouseenter', () => { customCursor.style.display = 'block'; });
});
