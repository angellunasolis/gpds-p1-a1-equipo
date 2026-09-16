document.addEventListener('DOMContentLoaded', () => {
    // Código para el menú de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navOverlay = document.getElementById('nav-overlay');
    // Modal clientes destacados
const celebrityModal = document.getElementById('celebrityModal');

if (celebrityModal) {
    const celebrityCards = document.querySelectorAll('.celebrity-card');
    const celebrityModalImg = document.getElementById('celebrityModalImg');
    const celebrityModalName = document.getElementById('celebrityModalName');
    const celebrityModalLink = document.getElementById('celebrityModalLink');
    const celebrityModalClose = document.querySelector('.celebrity-modal-close');

    celebrityCards.forEach(card => {
        card.addEventListener('click', () => {
            celebrityModalImg.src = card.dataset.img;
            celebrityModalImg.alt = card.dataset.name;
            celebrityModalName.textContent = card.dataset.name;
            celebrityModalLink.href = card.dataset.instagram;
            celebrityModal.classList.add('active');
        });
    });

    celebrityModalClose.addEventListener('click', () => {
        celebrityModal.classList.remove('active');
    });

    celebrityModal.addEventListener('click', (e) => {
        if (e.target === celebrityModal) {
            celebrityModal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            celebrityModal.classList.remove('active');
        }
    });
}

// Botón scroll to top
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (window.scrollY > 300 && footerTop > windowHeight) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Sliders antes/después
document.querySelectorAll('.slider-container').forEach(container => {
    const after = container.querySelector('.slider-after');
    const handle = container.querySelector('.slider-handle');
    const input = container.querySelector('.slider-input');

    function updateSlider(value) {
        after.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        handle.style.left = `${value}%`;
    }

    input.addEventListener('input', () => {
        updateSlider(input.value);
    });

    updateSlider(50);
});

// Animación counter en estadísticas
const statNumbers = document.querySelectorAll('.stat-number:not(.stat-number--rating)');

if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent.trim();
                const match = text.match(/(\d+)/);
                if (!match) return;

                const target = parseInt(match[1]);
                const suffix = text.replace(/[\d]/g, '').trim();
                const duration = 1500;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                let step = 0;

                const timer = setInterval(() => {
                    step++;
                    current = Math.min(Math.round(increment * step), target);
                    el.textContent = current + suffix;

                    if (step >= steps) {
                        clearInterval(timer);
                        el.textContent = text;
                    }
                }, duration / steps);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

    if (menuToggle && navList) {
    // Abrir y cerrar con el botón
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navList.setAttribute('aria-expanded', !isExpanded);
        navOverlay.classList.toggle('active');
    });

    // Cerrar al hacer clic en un link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.setAttribute('aria-expanded', 'false');
            navOverlay.classList.remove('active');
        });
    });

    // Cerrar al hacer clic en el overlay
    navOverlay.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-expanded', 'false');
        navOverlay.classList.remove('active');
    });
    }

// Active state en navegación
const currentPage = window.location.pathname.split('/').pop();
const pageToMatch = currentPage === '' ? '' : currentPage.replace('.html', '');

document.querySelectorAll('.nav-list li a').forEach(link => {
    const linkHref = link.getAttribute('href').replace('.html', '').replace(/^\//, '');
    const comparar = pageToMatch === '' && linkHref === '' ? true : linkHref !== '' && linkHref === pageToMatch;
    if (comparar) {
        link.classList.add('active');
    }
});
});
