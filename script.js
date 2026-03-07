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

        window.addEventListener('scroll', throttle(() => {
            const currentScroll = window.pageYOffset;

            // Adiciona classe quando scrolla
            if (currentScroll > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, 100));
    }

    handleMobileMenu() {
        if (!this.navToggle) return;

        this.navToggle.addEventListener('click', () => {
            const isExpanded = this.navToggle.getAttribute('aria-expanded') === 'true';
            this.navToggle.setAttribute('aria-expanded', !isExpanded);
            this.navToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');

            // Previne scroll do body quando menu está aberto
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Fecha menu ao clicar em um link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navToggle.setAttribute('aria-expanded', 'false');
                this.navToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fecha menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target) && this.navMenu.classList.contains('active')) {
                this.navToggle.setAttribute('aria-expanded', 'false');
                this.navToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    handleSmoothScroll() {
        this.navLinks.forEach(link => {
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

        window.addEventListener('scroll', throttle(() => {
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
        }, 100));
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
        this.elements = $$('.service-card, .diff-card, .testimonial-card, .pain-item, .solution-feature');
        this.init();
    }

    init() {
        // Adiciona classe reveal aos elementos
        this.elements.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${index * 0.05}s`;
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
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
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
                const telefone = $('#telefone').value;
                const servico = $('#servico').value;

                const message = `Olá! Sou ${nome} e gostaria de solicitar um orçamento para ${servico}. Meu telefone é ${telefone}.`;
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
// CURSOR PERSONALIZADO (DESKTOP ONLY)
// ============================================

class CustomCursor {
    constructor() {
        this.cursor = null;
        this.cursorDot = null;
        this.init();
    }

    init() {
        // Apenas em desktop
        if (window.matchMedia('(pointer: coarse)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        this.createCursor();
        this.addEventListeners();
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease, opacity 0.3s ease;
            opacity: 0;
            mix-blend-mode: difference;
        `;

        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'custom-cursor-dot';
        this.cursorDot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--color-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
        `;

        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorDot);
    }

    addEventListeners() {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            this.cursorDot.style.opacity = '1';
            this.cursor.style.opacity = '0.5';
            this.cursorDot.style.left = `${mouseX - 4}px`;
            this.cursorDot.style.top = `${mouseY - 4}px`;
        });

        // Animação suave do cursor
        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;

            this.cursor.style.left = `${cursorX - 20}px`;
            this.cursor.style.top = `${cursorY - 20}px`;

            requestAnimationFrame(animate);
        };
        animate();

        // Efeito hover em links e botões
        const interactiveElements = $$('a, button, .service-card, .diff-card, .testimonial-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursor.style.borderColor = 'var(--color-accent)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.borderColor = 'var(--color-primary)';
            });
        });

        // Esconde cursor ao sair da janela
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
            this.cursorDot.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '0.5';
            this.cursorDot.style.opacity = '1';
        });
    }
}

// ============================================
// NOTIFICAÇÃO TOAST
// ============================================

class ToastNotification {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        this.container.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(this.container);
    }

    show(message, type = 'success', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-primary)'};
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius-lg);
            font-size: var(--text-sm);
            font-weight: 500;
            box-shadow: var(--shadow-lg);
            animation: slideUp 0.3s ease;
        `;
        toast.textContent = message;

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
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

    // Toast global
    window.toast = new ToastNotification();

    // Gerenciamento de Áudio
    new AudioManager();

    // Adiciona classe ao body quando JS carrega
    document.body.classList.add('js-loaded');

    console.log('🩺 Blue Care - Site carregado com sucesso!');
});

// ============================================
// GERENCIAMENTO DE ÁUDIO
// ============================================

class AudioManager {
    constructor() {
        this.voiceSrc = 'ElevenLabs_2026-03-07T01_35_03_Rachel_pre_sp100_s50_sb75_se0_b_m2.mp3';
        this.bgMusicSrc = 'alex-productions-upbeat-and-inspiring-corporate-web(chosic.com).mp3';

        this.voiceAudio = new Audio(this.voiceSrc);
        this.bgMusic = new Audio(this.bgMusicSrc);

        this.initialized = false;
        this.isPaused = false;
        this.controlBtn = $('#audioControl');

        this.init();
    }

    init() {
        // Configurações da música de fundo
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.15; // Volume baixo para compor o fundo

        // Configurações da voz
        this.voiceAudio.volume = 0.8;

        // Gerencia botão de controle
        if (this.controlBtn) {
            this.controlBtn.addEventListener('click', () => this.toggleAudio());
        }

        // Tenta tocar ao carregar (geralmente bloqueado pelos navegadores)
        window.addEventListener('load', () => {
            this.tryPlay();
        });

        // Ativa no primeiro clique/interação caso o autoplay seja bloqueado
        const startAudio = () => {
            if (!this.initialized) {
                this.tryPlay();
            }
        };

        document.addEventListener('click', startAudio, { once: true });
        document.addEventListener('touchstart', startAudio, { once: true });
        document.addEventListener('scroll', startAudio, { once: true });
    }

    async tryPlay() {
        try {
            // Tenta tocar ambos
            await this.bgMusic.play();

            // Pequeno delay para a voz entrar após a música
            setTimeout(async () => {
                try {
                    await this.voiceAudio.play();
                } catch (e) {
                    console.warn('Voz bloqueada pelo navegador');
                }
            }, 1000);

            this.initialized = true;
            this.updateButtonState();
            console.log('🎵 Áudio iniciado com sucesso');
        } catch (error) {
            console.log('🔇 Autoplay bloqueado. Aguardando interação do usuário...');
        }
    }

    toggleAudio() {
        if (this.isPaused) {
            this.bgMusic.play();
            // Só toca a voz novamente se ela não tiver terminado ou se quisermos reiniciar
            // Por simplicidade, vamos apenas tocar/pausar o que estiver rodando
            if (!this.voiceAudio.paused || this.voiceAudio.currentTime > 0) {
                this.voiceAudio.play();
            }
            this.isPaused = false;
        } else {
            this.bgMusic.pause();
            this.voiceAudio.pause();
            this.isPaused = true;
        }
        this.updateButtonState();
    }

    updateButtonState() {
        if (!this.controlBtn) return;

        if (this.isPaused) {
            this.controlBtn.classList.add('paused');
            this.controlBtn.setAttribute('aria-label', 'Retomar áudio');
        } else {
            this.controlBtn.classList.remove('paused');
            this.controlBtn.setAttribute('aria-label', 'Pausar áudio');
        }
    }
}



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
            document.body.style.overflow = '';
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
// PERFORMANCE: PRELOAD CRITICAL RESOURCES
// ============================================

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Pré-carrega imagens importantes
        const criticalImages = [
            'images/hero-cuidado.jpg',
            'images/sobre-equipe.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    });
}

// ============================================
// SERVICE WORKER (OPCIONAL - PWA)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}
