(function() {
    'use strict';

    class ParticleSystem {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.particles = [];
            this.mouse = { x: null, y: null, radius: 150 };
            this.particleCount = 80;
            this.connectionDistance = 120;
            this.animationId = null;
            
            this.init();
            this.animate();
            this.setupEventListeners();
        }

        init() {
            this.resize();
            this.createParticles();
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        createParticles() {
            this.particles = [];
            const numParticles = Math.min(this.particleCount, Math.floor((this.canvas.width * this.canvas.height) / 15000));
            
            for (let i = 0; i < numParticles; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        }

        setupEventListeners() {
            window.addEventListener('resize', () => {
                this.resize();
                this.createParticles();
            });

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });

            window.addEventListener('mouseout', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        updateParticle(particle) {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }

            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = particle.x - this.mouse.x;
                const dy = particle.y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.x += Math.cos(angle) * force * 2;
                    particle.y += Math.sin(angle) * force * 2;
                }
            }
        }

        drawParticle(particle) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 240, 255, ${particle.opacity})`;
            this.ctx.fill();
        }

        drawConnections() {
            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < this.connectionDistance) {
                        const opacity = (1 - distance / this.connectionDistance) * 0.3;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            }
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                this.updateParticle(particle);
                this.drawParticle(particle);
            });

            this.drawConnections();

            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }

    class ScrollReveal {
        constructor() {
            this.elements = document.querySelectorAll('.reveal-on-scroll');
            this.observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            this.init();
        }

        init() {
            if ('IntersectionObserver' in window) {
                this.setupObserver();
            } else {
                this.revealAll();
            }
        }

        setupObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, this.observerOptions);

            this.elements.forEach(el => observer.observe(el));
        }

        revealAll() {
            this.elements.forEach(el => el.classList.add('revealed'));
        }
    }

    class MobileMenu {
        constructor() {
            this.menuBtn = document.querySelector('.mobile-menu-btn');
            this.navLinks = document.querySelector('.nav-links');
            this.isOpen = false;
            this.init();
        }

        init() {
            if (!this.menuBtn || !this.navLinks) return;

            this.menuBtn.addEventListener('click', () => this.toggle());

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }

        toggle() {
            this.isOpen = !this.isOpen;
            this.navLinks.classList.toggle('active', this.isOpen);
            this.updateButton();
        }

        close() {
            this.isOpen = false;
            this.navLinks.classList.remove('active');
            this.updateButton();
        }

        updateButton() {
            const spans = this.menuBtn.querySelectorAll('span');
            if (this.isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }

    class SmoothScroll {
        constructor() {
            this.init();
        }

        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#') return;

                    const target = document.querySelector(targetId);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    }

    class NavbarScroll {
        constructor() {
            this.navbar = document.querySelector('.navbar');
            this.lastScroll = 0;
            this.init();
        }

        init() {
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    this.navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                    this.navbar.style.backdropFilter = 'blur(10px)';
                    this.navbar.style.borderBottom = '1px solid rgba(0, 240, 255, 0.1)';
                } else {
                    this.navbar.style.background = 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%)';
                    this.navbar.style.backdropFilter = 'none';
                    this.navbar.style.borderBottom = 'none';
                }

                this.lastScroll = currentScroll;
            });
        }
    }

    class CursorGlow {
        constructor() {
            this.glow = document.createElement('div');
            this.glow.className = 'cursor-glow';
            this.init();
        }

        init() {
            this.glow.style.cssText = `
                position: fixed;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
                opacity: 0;
            `;
            document.body.appendChild(this.glow);

            document.addEventListener('mousemove', (e) => {
                this.glow.style.left = e.clientX + 'px';
                this.glow.style.top = e.clientY + 'px';
                this.glow.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                this.glow.style.opacity = '0';
            });
        }
    }

    function init() {
        const canvas = document.getElementById('particle-canvas');
        if (canvas) {
            new ParticleSystem(canvas);
        }
        
        new ScrollReveal();
        new MobileMenu();
        new SmoothScroll();
        new NavbarScroll();
        
        if (window.matchMedia('(hover: hover)').matches) {
            new CursorGlow();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
