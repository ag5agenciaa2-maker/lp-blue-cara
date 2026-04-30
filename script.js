/**
 * Blue Care - Home Care Especializado
 * JavaScript Vanilla ES6+ 
 * Interações e Microanimações Premium
 */

// ============================================
// UTILITÁRIOS
// ============================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// NAVEGAÇÃO
// ============================================

class Navigation {
    constructor() {
        this.header = $('#header');
        this.navToggle = $('#navToggle');
        this.navMenu = $('#navMenu');
        this.navLinks = $$('.nav-link');
        this.drawer = $('#drawerMenu');
        this.drawerOverlay = $('#drawerOverlay');
        this.drawerClose = $('#drawerClose');
        this.drawerLinks = $$('.drawer-link');

        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        this.handleActiveLink();
    }

    handleScroll() {
        let lastScroll = 0;
        let rafPending = false;

        window.addEventListener('scroll', () => {
            if (rafPending) return;
            rafPending = true;
            requestAnimationFrame(() => {
                rafPending = false;
                const currentScroll = window.pageYOffset;

                // Adiciona classe quando scrolla
                if (currentScroll > 50) {
                    this.header.classList.add('scrolled');
                } else {
                    this.header.classList.remove('scrolled');
                }

                // Ao descer some, ao subir aparece
                if (currentScroll > lastScroll && currentScroll > 200) {
                    // Rolando para baixo
                    this.header.classList.add('header-hidden');
                } else {
                    // Rolando para cima
                    this.header.classList.remove('header-hidden');
                }

                lastScroll = currentScroll <= 0 ? 0 : currentScroll;
            });
        }, { passive: true });
    }

    handleMobileMenu() {
        if (!this.navToggle || !this.drawer) return;

        const openDrawer = () => {
            this.drawer.classList.add('active');
            this.drawerOverlay.classList.add('active');
            this.navToggle.setAttribute('aria-expanded', 'true');
            this.navToggle.classList.add('active');
            document.body.classList.add('no-scroll');
        };

        const closeDrawer = () => {
            this.drawer.classList.remove('active');
            this.drawerOverlay.classList.remove('active');
            this.navToggle.setAttribute('aria-expanded', 'false');
            this.navToggle.classList.remove('active');
            document.body.classList.remove('no-scroll');
        };

        this.navToggle.addEventListener('click', () => {
            const isOpen = this.drawer.classList.contains('active');
            if (isOpen) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });

        if (this.drawerClose) {
            this.drawerClose.addEventListener('click', closeDrawer);
        }

        if (this.drawerOverlay) {
            this.drawerOverlay.addEventListener('click', closeDrawer);
        }

        // Fecha menu ao clicar em um link do drawer
        this.drawerLinks.forEach(link => {
            link.addEventListener('click', closeDrawer);
        });

        // Fechar com a tecla Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.drawer.classList.contains('active')) {
                closeDrawer();
            }
        });
    }

    handleSmoothScroll() {
        const allLinks = [...this.navLinks, ...this.drawerLinks];
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = $(href);
                    if (target) {
                        const headerHeight = this.header.offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    handleActiveLink() {
        const sections = $$('section[id]');
        let rafPending = false;

        window.addEventListener('scroll', () => {
            if (rafPending) return;
            rafPending = true;
            requestAnimationFrame(() => {
                rafPending = false;
                const scrollPosition = window.pageYOffset + this.header.offsetHeight + 100;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        this.navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
        }, { passive: true });
    }
}

// ============================================
// FAQ ACCORDION
// ============================================

class FAQAccordion {
    constructor() {
        this.faqItems = $$('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fecha todos os itens
                this.faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });

                // Abre o item clicado se não estava ativo
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }
}

// ============================================
// ANIMAÇÕES DE SCROLL (REVEAL)
// ============================================

class ScrollReveal {
    constructor() {
        // Exclui .testimonial-card do carrossel (tem animação própria)
        this.elements = $$('.service-card, .diff-card, .pain-item, .solution-feature, .testimonials-grid .testimonial-card');
        this.init();
    }

    init() {
        // Adiciona classe reveal aos elementos (delay via CSS, não inline)
        this.elements.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.setProperty('--reveal-delay', `${index * 0.02}s`);
        });

        // Observer para animar quando entrar na viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 100px 0px'
        });

        this.elements.forEach(el => observer.observe(el));
    }
}

// ============================================
// CONTADOR ANIMADO
// ============================================

class AnimatedCounter {
    constructor() {
        this.counters = $$('.trust-number, .exp-number, .stat-number');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const number = parseInt(text.replace(/\D/g, ''));

        if (isNaN(number)) return;

        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let display = Math.floor(current);
            if (hasPlus) display = '+' + display;
            if (hasPercent) display = display + '%';

            element.textContent = display;
        }, duration / steps);
    }
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

class ContactForm {
    constructor() {
        this.form = $('#contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.validateForm()) {
                this.handleSubmit();
            }
        });

        // Máscara para telefone
        const phoneInput = $('#telefone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                this.formatPhone(e.target);
            });
        }
    }

    formatPhone(input) {
        let value = input.value.replace(/\D/g, '');

        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        input.value = value;
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                this.showError(input, 'Este campo é obrigatório');
            } else {
                this.clearError(input);
            }
        });

        // Valida email se preenchido
        const email = $('#email');
        if (email && email.value && !this.isValidEmail(email.value)) {
            isValid = false;
            this.showError(email, 'Email inválido');
        }

        return isValid;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showError(input, message) {
        this.clearError(input);

        input.style.borderColor = 'var(--color-error)';

        const error = document.createElement('span');
        error.className = 'form-error';
        error.textContent = message;
        error.style.cssText = `
            color: var(--color-error);
            font-size: var(--text-xs);
            margin-top: var(--space-1);
        `;

        input.parentNode.appendChild(error);
    }

    clearError(input) {
        input.style.borderColor = '';
        const error = input.parentNode.querySelector('.form-error');
        if (error) error.remove();
    }

    handleSubmit() {
        const submitBtn = this.form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Estado de loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
                <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
            </svg>
            Enviando...
        `;

        // Simula envio (substituir por requisição real)
        setTimeout(() => {
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Enviado com sucesso!
            `;
            submitBtn.style.background = 'var(--color-success)';

            // Redireciona para WhatsApp após 1.5s
            setTimeout(() => {
                const nome = $('#nome').value;
                const email = $('#email').value || 'Não informado';
                const telefone = $('#telefone').value;
                const servico = $('#servico').options[$('#servico').selectedIndex].text;
                const mensagem = $('#mensagem').value || 'Não informada';

                const message = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n\n- E-mail: ${email}\n- Telefone: ${telefone}\n- Serviço: ${servico}\n- Situação: ${mensagem}`;
                const whatsappUrl = `https://wa.me/5521982873540?text=${encodeURIComponent(message)}`;

                window.open(whatsappUrl, '_blank');

                // Reseta formulário
                this.form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 1500);
        }, 1500);
    }
}

// ============================================
// PARALLAX EFFECT
// ============================================

class ParallaxEffect {
    constructor() {
        this.elements = $$('.hero-shape, .hero-bg-pattern');
        this.init();
    }

    init() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (window.matchMedia('(pointer: coarse)').matches) return; // Desativa em mobile

        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;

            this.elements.forEach((el, index) => {
                const speed = (index + 1) * 0.3;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }, 16));
    }
}

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

class LazyLoader {
    constructor() {
        this.images = $$('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            this.images.forEach(img => observer.observe(img));
        } else {
            // Fallback para navegadores sem suporte
            this.images.forEach(img => this.loadImage(img));
        }
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
        }
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os módulos
    new Navigation();
    new FAQAccordion();
    new ScrollReveal();
    new AnimatedCounter();
    new ContactForm();
    new ParallaxEffect();
    new LazyLoader();

    // Adiciona classe ao body quando JS carrega
    document.body.classList.add('js-loaded');

    console.log('🩺 Blue Care - Site carregado com sucesso!');
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC fecha menu mobile
    if (e.key === 'Escape') {
        const navMenu = $('#navMenu');
        const navToggle = $('#navToggle');

        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }

        // Fecha FAQ abertos
        const activeFaqs = $$('.faq-item.active');
        activeFaqs.forEach(faq => {
            faq.classList.remove('active');
            faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
    }
});

// ============================================
// SERVICE WORKER (OPCIONAL - PWA)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ============================================
// WHATSAPP PREMIUM
// ============================================

function initWaPremium() {
    const bubble = document.getElementById('wa-message-bubble');
    const typing = document.getElementById('wa-typing');
    const realMessage = document.getElementById('wa-real-message');
    const badge = document.getElementById('wa-notification');
    const closeBtn = document.getElementById('wa-close-btn');
    const mainBtn = document.getElementById('wa-main-btn');

    if (!bubble || !typing || !realMessage || !badge || !closeBtn || !mainBtn) return;

    // 1. Mostrar o balão após 20 segundos
    setTimeout(() => {
        bubble.classList.add('show');
        
        // 2. Simular digitação por 2.5 segundos antes de mostrar a mensagem
        setTimeout(() => {
            typing.style.display = 'none';
            realMessage.style.display = 'block';
        }, 2500);

    }, 20000);

    // Fechar balão
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        bubble.classList.remove('show');
        // Mostrar notificação após fechar para manter engajamento
        setTimeout(() => {
            badge.classList.add('show');
        }, 2000);
    });

    // Ao clicar no botão, remove tudo
    mainBtn.addEventListener('click', () => {
        bubble.classList.remove('show');
        badge.classList.remove('show');
    });
}

document.addEventListener('DOMContentLoaded', initWaPremium);

// ============================================
// CONTROLE DE ÁUDIO
// ============================================

function initAudioControl() {
    const audioBtn = document.getElementById('audioControl');
    if (!audioBtn) return;

    const iconPlaying = audioBtn.querySelector('.audio-icon-playing');
    const iconPaused = audioBtn.querySelector('.audio-icon-paused');

    // Cria os elementos de áudio
    const audioLocucao = new Audio('ElevenLabs_2026-03-07T01_35_03_Rachel_pre_sp100_s50_sb75_se0_b_m2.mp3');
    const audioFundo = new Audio('alex-productions-upbeat-and-inspiring-corporate-web(chosic.com).mp3');
    
    audioLocucao.loop = true;
    audioFundo.loop = true;
    
    // Configura volumes
    audioLocucao.volume = 1.0;
    audioFundo.volume = 0.12; // Trilha de fundo bem baixa e suave

    // Tenta dar play automaticamente (bloqueado por padrão em navegadores modernos)
    const startAudio = () => {
        const playLocucao = audioLocucao.play();
        const playFundo = audioFundo.play();

        Promise.all([playLocucao, playFundo]).then(() => {
            iconPlaying.style.display = 'block';
            iconPaused.style.display = 'none';
        }).catch(() => {
            // Bloqueado: Mantém mudo
            iconPlaying.style.display = 'none';
            iconPaused.style.display = 'block';
        });

        document.removeEventListener('click', startAudio);
        document.removeEventListener('scroll', startAudio);
    };

    // Inicia áudio ao primeiro sinal de interação do usuário
    document.addEventListener('click', startAudio);
    document.addEventListener('scroll', startAudio);

    audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audioLocucao.paused) {
            audioLocucao.play();
            audioFundo.play();
            iconPlaying.style.display = 'block';
            iconPaused.style.display = 'none';
            audioBtn.setAttribute('aria-label', 'Pausar áudio');
        } else {
            audioLocucao.pause();
            audioFundo.pause();
            iconPlaying.style.display = 'none';
            iconPaused.style.display = 'block';
            audioBtn.setAttribute('aria-label', 'Iniciar áudio');
        }
    });
}

document.addEventListener('DOMContentLoaded', initAudioControl);
