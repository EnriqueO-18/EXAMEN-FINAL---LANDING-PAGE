window.currentLanguage = 'es';

document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initLanguageSelector();
    initFormValidation();
    initSmoothScroll();
    initParallaxEffect();
    initFadeInSections();
});

function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        const expanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', expanded);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (Math.abs(currentScroll - lastScroll) > 100) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        lastScroll = currentScroll;
    });
}

function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLangSpan = document.getElementById('currentLang');

    if (!languageBtn || !languageDropdown) return;

    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
        languageBtn.classList.toggle('active');
        
        const expanded = languageDropdown.classList.contains('show');
        languageBtn.setAttribute('aria-expanded', expanded);
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            languageDropdown.classList.remove('show');
            languageBtn.classList.remove('active');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });

    const languageLinks = languageDropdown.querySelectorAll('a');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            const langText = this.textContent.trim();
            const flagImg = this.querySelector('.flag img').cloneNode(true);

            currentLangSpan.textContent = langText;
            const btnFlag = languageBtn.querySelector('.flag');
            btnFlag.innerHTML = '';
            btnFlag.appendChild(flagImg);

            if (lang === 'en') {
                changeToEnglish();
            } else {
                changeToSpanish();
            }

            languageDropdown.classList.remove('show');
            languageBtn.classList.remove('active');
            languageBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

function changeToEnglish() {
    window.currentLanguage = 'en';

    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = 'Home';
    if (navLinks[1]) navLinks[1].textContent = 'About Us';
    if (navLinks[2]) navLinks[2].textContent = 'Services';
    if (navLinks[3]) navLinks[3].textContent = 'Impact';
    if (navLinks[4]) navLinks[4].textContent = 'How It Works?';

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerHTML = 'Sustainable mobility for a green future,<br>Travel eco-friendly, travel with EcoMove';

    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) heroBtn.textContent = 'Start Now';

    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = 'Looking for sustainable mobility?';
    if (sectionTitles[1]) sectionTitles[1].textContent = 'About the Application';
    if (sectionTitles[2]) sectionTitles[2].textContent = 'Real Ecological Impact';
    if (sectionTitles[3]) sectionTitles[3].textContent = 'What do our users say?';
    if (sectionTitles[4]) sectionTitles[4].textContent = 'How It Works?';

    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    if (sectionSubtitles[0]) sectionSubtitles[0].textContent = 'Find the best eco-friendly option to move around';
    if (sectionSubtitles[1]) sectionSubtitles[1].textContent = 'Statistics from our sustainable community';
    if (sectionSubtitles[2]) sectionSubtitles[2].textContent = 'Start your sustainable journey in 3 simple steps';

    const featureTitles = document.querySelectorAll('.features .feature-title');
    if (featureTitles[0]) featureTitles[0].textContent = 'Electric Bicycles';
    if (featureTitles[1]) featureTitles[1].textContent = 'Optimized Routes';
    if (featureTitles[2]) featureTitles[2].textContent = 'Ecological Impact';

    const aboutFeatures = document.querySelectorAll('.about-feature-item span');
    if (aboutFeatures[0]) aboutFeatures[0].textContent = 'Green mobility';
    if (aboutFeatures[1]) aboutFeatures[1].textContent = 'Zero emissions';

    const impactCards = document.querySelectorAll('.join-section .feature-title');
    if (impactCards[0]) impactCards[0].textContent = '500 Tons CO₂ Saved';
    if (impactCards[1]) impactCards[1].textContent = '50,000 Active Users';
    if (impactCards[2]) impactCards[2].textContent = '1 Million KM Traveled';

    const stepTitles = document.querySelectorAll('.how-it-works-section .step-title');
    if (stepTitles[0]) stepTitles[0].textContent = 'Download the App';
    if (stepTitles[1]) stepTitles[1].textContent = 'Find a Vehicle';
    if (stepTitles[2]) stepTitles[2].textContent = 'Scan and Travel';

    const stepDescriptions = document.querySelectorAll('.how-it-works-section .step-description');
    if (stepDescriptions[0]) stepDescriptions[0].textContent = 'Available for iOS and Android. Register with your email or social networks';
    if (stepDescriptions[1]) stepDescriptions[1].textContent = 'Use the map to locate bicycles and scooters near you in real time';
    if (stepDescriptions[2]) stepDescriptions[2].textContent = 'Scan the QR code, unlock your vehicle and start your eco-friendly journey';

    if (sectionTitles[5]) sectionTitles[5].textContent = 'Contact Us';
    const formLabels = document.querySelectorAll('.contact-section label');
    if (formLabels[0]) formLabels[0].textContent = 'Full Name';
    if (formLabels[1]) formLabels[1].textContent = 'Email';
    if (formLabels[2]) formLabels[2].textContent = 'Phone';
    if (formLabels[3]) formLabels[3].textContent = 'Message';

    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) submitBtn.textContent = 'Send Message';
}

function changeToSpanish() {
    window.currentLanguage = 'es';

    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = 'Inicio';
    if (navLinks[1]) navLinks[1].textContent = 'Nosotros';
    if (navLinks[2]) navLinks[2].textContent = 'Servicios';
    if (navLinks[3]) navLinks[3].textContent = 'Impacto';

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerHTML = 'Movilidad sostenible para un futuro verde,<br>Viaja eco-friendly, viaja con EcoMove';

    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) heroBtn.textContent = 'Empezar Ahora';


    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');

    if (sectionTitles[0]) sectionTitles[0].textContent = '¿Buscas movilidad sostenible?';
    if (sectionSubtitles[0]) sectionSubtitles[0].textContent = 'Encuentra la mejor opción eco-friendly para moverte';

    const featureTitles = document.querySelectorAll('.feature-title');
    if (featureTitles[0]) featureTitles[0].textContent = 'Bicicletas Eléctricas';
    if (featureTitles[1]) featureTitles[1].textContent = 'Rutas Optimizadas';
    if (featureTitles[2]) featureTitles[2].textContent = 'Impacto Ecológico';

    if (sectionTitles[1]) sectionTitles[1].textContent = 'Acerca de la Aplicación';
    const aboutH3 = document.querySelector('.about-app-text h3');
    if (aboutH3) aboutH3.textContent = 'EcoMove';
    
    const aboutP = document.querySelector('.about-app-text p');
    if (aboutP) aboutP.textContent = 'Creemos que moverse por tu ciudad no debería dañar el planeta. Por eso integramos servicios de movilidad sostenible en Lima, ofreciendo alquiler de bicicletas y scooters eléctricos con rutas optimizadas eco-friendly. Nuestro panel de impacto ambiental te muestra el CO₂ que ahorras en cada viaje. Encuentra estaciones disponibles en tiempo real, visualiza tarifas y únete a eventos de educación ambiental. Confía en nosotros para moverte de forma consciente y contribuir a un futuro más verde.';

    const featureBadges = document.querySelectorAll('.about-feature-item span');
    if (featureBadges[0]) featureBadges[0].textContent = 'Movilidad verde';
    if (featureBadges[1]) featureBadges[1].textContent = 'Cero emisiones';

    if (sectionTitles[2]) sectionTitles[2].textContent = 'Impacto Ecológico Real';
    if (sectionSubtitles[1]) sectionSubtitles[1].textContent = 'Estadísticas de nuestra comunidad sostenible';

    if (featureTitles[3]) featureTitles[3].textContent = '500 Toneladas CO₂ Ahorradas';
    if (featureTitles[4]) featureTitles[4].textContent = '50,000 Usuarios Activos';
    if (featureTitles[5]) featureTitles[5].textContent = '1 Millón de KM Recorridos';

    if (sectionTitles[3]) sectionTitles[3].textContent = '¿Qué dicen nuestros usuarios?';

    const testimonios = [
        { name: "María Torres", role: "Estudiante", text: "EcoMove cambió mi forma de moverme por Lima. Ahora voy a la universidad en bicicleta eléctrica y ahorro dinero mientras cuido el planeta" },
        { name: "Carlos Ruiz", role: "Profesional", text: "Las rutas optimizadas me ayudan a llegar más rápido al trabajo. Ver mi impacto ambiental positivo es muy motivador" },
        { name: "Ana Pérez", role: "Emprendedora", text: "Uso los scooters eléctricos para mis reuniones en el centro. Es práctico, económico y sostenible" },
        { name: "Jorge Mendoza", role: "Freelancer", text: "La disponibilidad en tiempo real de las estaciones es genial. Siempre encuentro un vehículo cerca" },
        { name: "Lucía Castro", role: "Diseñadora", text: "Los eventos de educación ambiental me ayudaron a entender mi huella de carbono. Ahora soy una usuaria comprometida" },
        { name: "Roberto Silva", role: "Ingeniero", text: "EcoMove es la mejor solución de movilidad sostenible en Lima. Tarifas justas y servicio excelente" }
    ];

    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        if (testimonios[index]) {
            const nameEl = card.querySelector('.testimonial-name');
            const roleEl = card.querySelector('.testimonial-role');
            const textEl = card.querySelector('.testimonial-text');
            if (nameEl) nameEl.textContent = testimonios[index].name;
            if (roleEl) roleEl.textContent = testimonios[index].role;
            if (textEl) textEl.textContent = testimonios[index].text;
        }
    });

    if (sectionTitles[4]) sectionTitles[4].textContent = 'Nuestro Equipo';
    const teamText = document.querySelector('.team-text p');
    if (teamText) teamText.innerHTML = '<strong>Un equipo apasionado por la sostenibilidad y la tecnología.</strong> Desarrollamos soluciones innovadoras para promover la movilidad eco-friendly y reducir la huella de carbono en las ciudades.';

    if (sectionTitles[5]) sectionTitles[5].textContent = 'Contáctanos';
    const formLabels = document.querySelectorAll('.form-group label');
    if (formLabels[0]) formLabels[0].textContent = 'Nombre Completo';
    if (formLabels[1]) formLabels[1].textContent = 'Correo Electrónico';
    if (formLabels[2]) formLabels[2].textContent = 'Teléfono';
    if (formLabels[3]) formLabels[3].textContent = 'Mensaje';

    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = 'Enviar Mensaje';

    // Footer
    const footerTitles = document.querySelectorAll('.footer-links h4, .footer-social h4, .footer-apps h4');
    if (footerTitles[0]) footerTitles[0].textContent = 'Enlaces Rápidos';
    if (footerTitles[1]) footerTitles[1].textContent = 'Redes Sociales';
    if (footerTitles[2]) footerTitles[2].textContent = 'App Móvil';

    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = 'Política de privacidad';
    if (footerLinks[1]) footerLinks[1].textContent = 'Preguntas frecuentes';

    const footerInfo = document.querySelector('.footer-info');
    if (footerInfo) {
        const footerPs = footerInfo.querySelectorAll('p');
        if (footerPs[0]) footerPs[0].innerHTML = '<strong>Email:</strong> contacto@ecomove.pe';
        if (footerPs[1]) footerPs[1].innerHTML = '<strong>Dirección:</strong> Av. Javier Prado Este 456, San Isidro, Lima';
    }
}

function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const config = {
        nombre: {
            minLength: 3,
            maxLength: 100,
            pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/,
            messages: {
                empty: 'El nombre es obligatorio',
                minLength: 'El nombre debe tener al menos 3 caracteres',
                maxLength: 'El nombre no puede exceder 100 caracteres',
                pattern: 'El nombre solo puede contener letras y espacios'
            }
        },
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            messages: {
                empty: 'El correo electrónico es obligatorio',
                pattern: 'Por favor, ingresa un correo electrónico válido'
            }
        },
        telefono: {
            length: 9,
            pattern: /^[0-9]{9}$/,
            messages: {
                empty: 'El teléfono es obligatorio',
                length: 'El teléfono debe tener exactamente 9 dígitos',
                pattern: 'El teléfono solo puede contener números',
                invalid: 'Por favor, ingresa un número de teléfono válido'
            }
        },
        asunto: {
            minLength: 10,
            maxLength: 500,
            messages: {
                empty: 'El mensaje es obligatorio',
                minLength: 'El mensaje debe tener al menos 10 caracteres',
                maxLength: 'El mensaje no puede exceder 500 caracteres'
            }
        }
    };

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        input.classList.add('error');
        errorElement.textContent = message;
        return false;
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        input.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    function validateNombre(input) {
        const value = input.value.trim();
        const cfg = config.nombre;
        clearError(input);

        if (value === '') return showError(input, cfg.messages.empty);
        if (value.length < cfg.minLength) return showError(input, cfg.messages.minLength);
        if (value.length > cfg.maxLength) return showError(input, cfg.messages.maxLength);
        if (!cfg.pattern.test(value)) return showError(input, cfg.messages.pattern);

        return true;
    }

    function validateEmail(input) {
        const value = input.value.trim();
        const cfg = config.email;
        clearError(input);

        if (value === '') return showError(input, cfg.messages.empty);
        if (!cfg.pattern.test(value)) return showError(input, cfg.messages.pattern);

        return true;
    }

    function validateTelefono(input) {
        const value = input.value.trim();
        const cfg = config.telefono;
        clearError(input);

        if (value === '') return showError(input, cfg.messages.empty);
        if (!/^[0-9]*$/.test(value)) return showError(input, cfg.messages.pattern);
        if (value.length !== cfg.length) return showError(input, cfg.messages.length);
        if (/^(\d)\1+$/.test(value)) return showError(input, cfg.messages.invalid);
        if (!value.startsWith('9')) return showError(input, 'El teléfono debe comenzar con 9');

        return true;
    }

    function validateAsunto(input) {
        const value = input.value.trim();
        const cfg = config.asunto;
        clearError(input);

        if (value === '') return showError(input, cfg.messages.empty);
        if (value.length < cfg.minLength) return showError(input, cfg.messages.minLength);
        if (value.length > cfg.maxLength) return showError(input, cfg.messages.maxLength);

        return true;
    }

    function validateForm(form) {
        const nombre = form.querySelector('#nombre');
        const email = form.querySelector('#email');
        const telefono = form.querySelector('#telefono');
        const asunto = form.querySelector('#asunto');

        const isNombreValid = validateNombre(nombre);
        const isEmailValid = validateEmail(email);
        const isTelefonoValid = validateTelefono(telefono);
        const isAsuntoValid = validateAsunto(asunto);

        return isNombreValid && isEmailValid && isTelefonoValid && isAsuntoValid;
    }

    const nombreInput = contactForm.querySelector('#nombre');
    const emailInput = contactForm.querySelector('#email');
    const telefonoInput = contactForm.querySelector('#telefono');
    const asuntoInput = contactForm.querySelector('#asunto');

    if (nombreInput) {
        nombreInput.addEventListener('blur', () => validateNombre(nombreInput));
        nombreInput.addEventListener('input', () => {
            if (nombreInput.classList.contains('error')) {
                validateNombre(nombreInput);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => validateEmail(emailInput));
        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('error')) {
                validateEmail(emailInput);
            }
        });
    }

    if (telefonoInput) {
        telefonoInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 9);
            if (this.classList.contains('error')) {
                validateTelefono(this);
            }
        });
        telefonoInput.addEventListener('blur', () => validateTelefono(telefonoInput));
    }

    if (asuntoInput) {
        asuntoInput.addEventListener('blur', () => validateAsunto(asuntoInput));
        asuntoInput.addEventListener('input', () => {
            if (asuntoInput.classList.contains('error')) {
                validateAsunto(asuntoInput);
            }
        });
    }

    let isSubmitting = false;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (isSubmitting) return;

        if (validateForm(this)) {
            const submitButton = this.querySelector('.btn-submit');
            
            const existingDots = submitButton.querySelector('.loading-dots');
            if (existingDots) {
                existingDots.remove();
            }
            
            isSubmitting = true;
            submitButton.disabled = true;
            
            const dots = document.createElement('span');
            dots.className = 'loading-dots';
            dots.innerHTML = '<span></span><span></span><span></span>';
            submitButton.appendChild(dots);

            setTimeout(() => {
                const successMessage = window.currentLanguage === 'en' 
                    ? 'Message sent successfully ✓'
                    : 'Mensaje enviado correctamente ✓';
                
                showNotification(successMessage);
                this.reset();

                const inputs = this.querySelectorAll('.form-control');
                inputs.forEach(input => clearError(input));

                submitButton.disabled = false;
                if (dots && dots.parentNode) {
                    dots.remove();
                }
                isSubmitting = false;
            }, 1000);
        } else {
            const firstError = this.querySelector('.form-control.error');
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');

    let ticking = false;

    function updateScroll() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero ? hero.offsetHeight : 0;

        if (scrolled < heroHeight) {
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
            }

            if (heroContent) {
                const opacity = 1 - (scrolled / (heroHeight * 0.7));
                heroContent.style.opacity = Math.max(0, opacity);
            }
        }

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateScroll);
            ticking = true;
        }
    });
}

function initFadeInSections() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.features, .join-section, .team-section, .contact-section, .testimonials-section, .about-app-section');
    sections.forEach(section => {
        section.classList.add('fade-section');
        observer.observe(section);
    });
}

let isNotificationShowing = false;

function showNotification(message) {
    if (isNotificationShowing) return;
    
    isNotificationShowing = true;
    
    const notification = document.createElement('div');
    notification.className = 'notification show';
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            isNotificationShowing = false;
        }, 300);
    }, 3000);
}