/**
 * PINTOR EN VALENCIA 24/7 — INTERACTIVIDAD DINÁMICA (V2 CON FOTOS Y PRECIOS REALES)
 * Fuente de datos e imágenes: https://pintorenvalencia247.es
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '34643673169';
  const EMAIL_ADDRESS = 'info@pintorenvalencia247.es';

  /* =========================================================================
     GALERÍA CON FOTOGRAFÍAS REALES DE PINTORENVALENCIA247.ES
     ========================================================================= */
  const GALLERY_PROJECTS = [
    {
      id: 'piso-90m2',
      title: 'Alisado y pintura de piso',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Interiores · Alisado',
      surface: '90 m²',
      location: 'Valencia',
      photo: 'assets/images/proyecto-piso-90m2.jpg',
      summary: 'Eliminación de gotelé, nivelado con luz transversal y acabado en esmalte al agua.',
      specs: [
        'Eliminación íntegra de gotelé en salón, pasillo y cocina abierta.',
        'Revisión de planeidad con foco de luz transversal.',
        'Acabado lavable en esmalte al agua blanco cálido.'
      ]
    },
    {
      id: 'piso-100m2-alquiler',
      title: 'Modernización para alquiler',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Vivienda Alquiler',
      surface: '100 m²',
      location: 'Extramurs · Valencia',
      photo: 'assets/images/proyecto-piso-100m2-alquiler.jpg',
      summary: 'Saneamiento de manchas de humedad y combinación de blanco con color intenso.',
      specs: [
        'Puesta a punto rápida orientada a entrada inmediata de inquilinos.',
        'Sellado antimanchas previo en techos y encuentros.',
        'Pared principal en rojo intenso de alta cubrición.'
      ]
    },
    {
      id: 'habitacion-12m2',
      title: 'Humedades en dormitorio',
      categories: ['reformas', 'interiores'],
      categoryLabel: 'Antihumedad',
      surface: '12 m²',
      location: 'Beniferri · Valencia',
      photo: 'assets/images/proyecto-habitacion-12m2.jpg',
      summary: 'Tratamiento contra condensación con masilla antihumedad y esmalte especial.',
      specs: [
        'Saneamiento de puente térmico junto a carpintería exterior.',
        'Regularización con masilla antihumedad transpirable.',
        'Terminación en pintura plástica lavable bicolor.'
      ]
    },
    {
      id: 'alisado-habitacion',
      title: 'Alisado directo económico',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Optimización Coste',
      surface: 'Dormitorio',
      location: 'Ruzafa · Valencia',
      photo: 'assets/images/proyecto-alisado-habitacion.jpg',
      summary: 'Alisado directo sobre gotelé duro para ajustar presupuesto y pintura en color.',
      specs: [
        'Tendido de pasta cubregotelé de alta adherencia.',
        'Lijado fino con aspiración y perfilado de marcos.',
        'Acabado mate sedoso en tono malva y blanco puro.'
      ]
    },
    {
      id: 'color-salon',
      title: 'Pintura plástica decorativa',
      categories: ['interiores'],
      categoryLabel: 'Interiores · Color',
      surface: 'Salón y paso',
      location: 'Valencia',
      photo: 'assets/images/proyecto-color-salon.jpg',
      summary: 'Renovación luminosa en pintura plástica lavable con recorte limpio en carpintería.',
      specs: [
        'Protección integral de tarima flotante, puertas y mecanismos.',
        'Doble mano de pintura plástica ecológica sin olor.',
        'Contraste luminoso entre paño lima y distribuidor blanco.'
      ]
    },
    {
      id: 'saneamiento-cuarto',
      title: 'Saneamiento y reparación',
      categories: ['reformas'],
      categoryLabel: 'Rehabilitación',
      surface: 'Techo y paredes',
      location: 'Valencia',
      photo: 'assets/images/proyecto-saneamiento-humedad.jpg',
      summary: 'Picado de zonas dañadas por humedad, malla, escayola y plástico transpirable.',
      specs: [
        'Retirada de revestimiento suelto y saneado fungicida.',
        'Armado de grietas con malla de fibra y tendido de escayola.',
        'Acabado final plástico transpirable anti-moho.'
      ]
    },
    {
      id: 'locales-empresas',
      title: 'Oficinas, locales y naves',
      categories: ['locales'],
      categoryLabel: 'Empresas 24/7',
      surface: 'Comercial',
      location: 'Valencia y polígonos',
      photo: 'assets/images/servicio-empresas.png',
      hasText: true,
      summary: 'Pintura profesional para negocios, oficinas y hostelería sin frenar tu actividad.',
      specs: [
        'Ejecución flexible en horario nocturno, festivo o fin de semana.',
        'Pinturas de secado rápido y alta resistencia al roce.',
        'Ideal para locales, oficinas, colegios y alquiler turístico.'
      ]
    },
    {
      id: 'exteriores-metal',
      title: 'Esmaltado en metal y verjas',
      categories: ['exteriores'],
      categoryLabel: 'Exteriores · Metal',
      surface: 'Metal y fachadas',
      location: 'Valencia y alrededores',
      photo: 'assets/images/servicio-pintado-metal.png',
      hasText: true,
      summary: 'Pintado antioxidante a pistola o rodillo en verjas, puertas, escaleras y ventanas.',
      specs: [
        'Decapado/lijado de óxido e imprimación anticorrosiva.',
        'Esmaltado uniforme resistente al sol y humedad salina.',
        'Actuaciones en chalets, comunidades y parkings.'
      ]
    }
  ];

  /* =========================================================================
     1. MENÚ MÓVIL Y SECCIÓN ACTIVA
     ========================================================================= */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMobileMenu() {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('is-open', !expanded);
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

    document.addEventListener('click', (e) => {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((sec) => navObserver.observe(sec));
  }

  /* =========================================================================
     2. SLIDER FOTOGRÁFICO ANTES / DESPUÉS EN HERO
     ========================================================================= */
  const compareRange = document.getElementById('compareRange');
  const compareAfter = document.getElementById('compareAfter');
  const compareDivider = document.getElementById('compareDivider');
  const compareHandle = document.getElementById('compareHandle');

  if (compareRange && compareAfter && compareDivider && compareHandle) {
    const updateComparison = (val) => {
      const pct = Math.min(94, Math.max(6, Number(val)));
      compareAfter.style.clipPath = `inset(0 0 0 ${pct}%)`;
      compareDivider.style.left = `${pct}%`;
      compareHandle.style.left = `${pct}%`;
    };
    compareRange.addEventListener('input', (e) => updateComparison(e.target.value));
    updateComparison(compareRange.value);
  }

  /* =========================================================================
     3. GALERÍA DINÁMICA + LIGHTBOX CON FOTOS REALES
     ========================================================================= */
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('projectLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxVisual = document.getElementById('lightboxVisual');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxSurface = document.getElementById('lightboxSurface');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSummary = document.getElementById('lightboxSummary');
  const lightboxSpecs = document.getElementById('lightboxSpecs');
  const lightboxQuoteBtn = document.getElementById('lightboxQuoteBtn');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let visibleProjects = [...GALLERY_PROJECTS];
  let currentProjectIndex = 0;
  let lastFocusedElement = null;

  function renderGallery(filter = 'todos') {
    if (!galleryGrid) return;
    visibleProjects =
      filter === 'todos'
        ? [...GALLERY_PROJECTS]
        : GALLERY_PROJECTS.filter((p) => p.categories.includes(filter));

    galleryGrid.innerHTML = visibleProjects
      .map(
        (project, idx) => `
      <article class="project-card${project.hasText ? ' is-graphic' : ''}">
        <div class="project-thumb" data-open-idx="${idx}" tabindex="0" role="button" aria-label="Ampliar ${project.title}">
          <img src="${project.photo}" alt="${project.title}" class="project-photo${project.hasText ? ' is-graphic-img' : ''}" loading="lazy" />
          ${
            project.hasText
              ? ''
              : `<span class="project-category-pill">${project.categoryLabel}</span>
                 <span class="project-surface-pill">${project.surface}</span>`
          }
        </div>
        <div class="project-body">
          ${
            project.hasText
              ? `<div class="project-inline-badges">
                   <span class="project-inline-badge">${project.categoryLabel}</span>
                   <span class="project-inline-badge">${project.surface}</span>
                 </div>`
              : ''
          }
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <button type="button" class="project-open-btn" data-open-idx="${idx}">
            Ampliar proyecto →
          </button>
        </div>
      </article>
    `
      )
      .join('');
  }

  function openLightbox(index) {
    if (!lightbox || !visibleProjects[index]) return;
    currentProjectIndex = index;
    const proj = visibleProjects[index];

    lightboxVisual.innerHTML = `<img src="${proj.photo}" alt="${proj.title}" />`;
    lightboxCategory.textContent = proj.categoryLabel;
    lightboxSurface.textContent = proj.surface;
    lightboxLocation.textContent = proj.location;
    lightboxTitle.textContent = proj.title;
    lightboxSummary.textContent = proj.summary;

    lightboxSpecs.innerHTML = proj.specs.map((item) => `<div>✓ ${item}</div>`).join('');

    lightboxQuoteBtn.onclick = () => {
      closeLightbox();
      const messageField = document.getElementById('contactMessage');
      if (messageField) {
        messageField.value = `Hola, quiero presupuesto para un trabajo como "${proj.title}" (${proj.surface}).`;
      }
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    lightboxPrev?.removeAttribute('hidden');
    lightboxNext?.removeAttribute('hidden');
    lightboxSpecs?.removeAttribute('hidden');
    lightboxSummary?.removeAttribute('hidden');

    lastFocusedElement = document.activeElement;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  // Ampliación completa también para las imágenes con texto de la sección Servicios
  document.querySelectorAll('.service-media[data-zoom-src]').forEach((mediaEl) => {
    mediaEl.addEventListener('click', () => {
      if (!lightbox) return;
      const src = mediaEl.getAttribute('data-zoom-src');
      const title = mediaEl.getAttribute('data-zoom-title') || 'Servicio';
      lightboxVisual.innerHTML = `<img src="${src}" alt="${title}" />`;
      lightboxCategory.textContent = 'Servicio Oficial';
      lightboxSurface.textContent = '24/7';
      lightboxLocation.textContent = 'Valencia';
      lightboxTitle.textContent = title;
      lightboxSummary.textContent = '';
      lightboxSummary?.setAttribute('hidden', '');
      lightboxSpecs?.setAttribute('hidden', '');
      lightboxPrev?.setAttribute('hidden', '');
      lightboxNext?.setAttribute('hidden', '');

      lightboxQuoteBtn.onclick = () => {
        closeLightbox();
        const messageField = document.getElementById('contactMessage');
        if (messageField) {
          messageField.value = `Hola, solicito información y presupuesto sobre "${title}".`;
        }
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      };

      lastFocusedElement = document.activeElement;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose?.focus();
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  if (galleryGrid) {
    renderGallery('todos');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter') || 'todos';
        filterButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        renderGallery(filter);
      });
    });

    galleryGrid.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-idx]');
      if (trigger) openLightbox(Number(trigger.getAttribute('data-open-idx')));
    });

    galleryGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const trigger = e.target.closest('[data-open-idx]');
        if (trigger) {
          e.preventDefault();
          openLightbox(Number(trigger.getAttribute('data-open-idx')));
        }
      }
    });
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev?.addEventListener('click', () => {
    openLightbox((currentProjectIndex - 1 + visibleProjects.length) % visibleProjects.length);
  });

  lightboxNext?.addEventListener('click', () => {
    openLightbox((currentProjectIndex + 1) % visibleProjects.length);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      if (lightbox?.classList.contains('is-open')) closeLightbox();
    }
    if (lightbox?.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') lightboxPrev?.click();
      if (e.key === 'ArrowRight') lightboxNext?.click();
    }
  });

  /* =========================================================================
     4. CALCULADORA DINÁMICA DE PRECIOS REALES (BASE 12 €/m² DE LA WEB OFICIAL)
     ========================================================================= */
  const estMeters = document.getElementById('estMeters');
  const estMetersOutput = document.getElementById('estMetersOutput');
  const estState = document.getElementById('estState');
  const estTax = document.getElementById('estTax');
  const estUrgency = document.getElementById('estUrgency');
  const calcBasePrice = document.getElementById('calcBasePrice');
  const calcTotalIva = document.getElementById('calcTotalIva');
  const estWhatsappBtn = document.getElementById('estWhatsappBtn');
  const estToFormBtn = document.getElementById('estToFormBtn');

  function formatEuro(num) {
    return new Intl.NumberFormat('es-ES', {
      maximumFractionDigits: 0
    }).format(Math.round(num));
  }

  function updateCalculator() {
    if (!estMeters || !estState || !estTax || !estUrgency) return;

    const m2 = Number(estMeters.value);
    const ratePerM2 = Number(estState.selectedOptions[0]?.dataset.rate || 12);
    const stateLabel = estState.selectedOptions[0]?.textContent || '';
    const taxRate = Number(estTax.value); // 0.10 particular, 0.21 alquiler/empresa
    const urgencyMult = Number(estUrgency.selectedOptions[0]?.dataset.mult || 1);
    const urgencyLabel = estUrgency.selectedOptions[0]?.textContent || '';

    if (estMetersOutput) estMetersOutput.textContent = `${m2} m²`;

    const baseNet = m2 * ratePerM2 * urgencyMult;
    const totalWithTax = baseNet * (1 + taxRate);
    const taxPctLabel = Math.round(taxRate * 100);

    if (calcBasePrice) calcBasePrice.textContent = `${formatEuro(baseNet)} € + IVA`;
    if (calcTotalIva) {
      calcTotalIva.textContent = `${formatEuro(totalWithTax)} € IVA incl. (${taxPctLabel} %) · Visita exacta gratis`;
    }

    const waMsg = encodeURIComponent(
      `Hola Pintor en Valencia 24/7, he calculado mi presupuesto orientativo en la web:\n` +
        `• Superficie: ${m2} m²\n` +
        `• Trabajo: ${stateLabel}\n` +
        `• Horario: ${urgencyLabel}\n` +
        `• Estimación base: ${formatEuro(baseNet)} € + IVA (${taxPctLabel}%)\n` +
        `¿Podemos agendar visita gratuita?`
    );

    if (estWhatsappBtn) {
      estWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
    }
  }

  [estMeters, estState, estTax, estUrgency].forEach((el) => {
    el?.addEventListener('input', updateCalculator);
    el?.addEventListener('change', updateCalculator);
  });
  updateCalculator();

  estToFormBtn?.addEventListener('click', () => {
    const contactMeters = document.getElementById('contactMeters');
    const contactMessage = document.getElementById('contactMessage');
    const contactService = document.getElementById('contactService');

    if (contactMeters && estMeters) contactMeters.value = `${estMeters.value} m²`;
    if (contactService) contactService.value = 'Pintura de piso / vivienda';
    if (contactMessage && calcBasePrice) {
      contactMessage.value = `Superficie: ${estMeters.value} m². ${estState.selectedOptions[0].textContent}. Estimación web: ${calcBasePrice.textContent}. Solicito visita gratuita.`;
    }
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('contactName')?.focus();
  });

  /* =========================================================================
     5. FORMULARIO DE CONTACTO CON VALIDACIÓN EN TIEMPO REAL
     ========================================================================= */
  const quoteForm = document.getElementById('quoteForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const successWhatsappLink = document.getElementById('successWhatsappLink');
  const successMailLink = document.getElementById('successMailLink');

  function setFieldError(fieldId, hasError) {
    const input = document.getElementById(fieldId);
    const group = input?.closest('.field-group');
    if (!group || !input) return;
    group.classList.toggle('has-error', hasError);
    input.setAttribute('aria-invalid', String(hasError));
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const zone = document.getElementById('contactZone').value.trim();
      const service = document.getElementById('contactService').value;
      const meters = document.getElementById('contactMeters').value.trim();
      const urgent = document.getElementById('contactUrgent').checked;
      const message = document.getElementById('contactMessage').value.trim();
      const privacy = document.getElementById('contactPrivacy').checked;

      let isValid = true;

      setFieldError('contactName', name.length < 2);
      if (name.length < 2) isValid = false;

      const digitsOnly = phone.replace(/\D/g, '');
      setFieldError('contactPhone', digitsOnly.length < 9);
      if (digitsOnly.length < 9) isValid = false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const badEmail = email !== '' && !emailRegex.test(email);
      setFieldError('contactEmail', badEmail);
      if (badEmail) isValid = false;

      setFieldError('contactService', !service);
      if (!service) isValid = false;

      setFieldError('contactMessage', message.length < 6);
      if (message.length < 6) isValid = false;

      const privacyGroup = document.getElementById('contactPrivacy')?.closest('.field-group');
      if (!privacy) {
        privacyGroup?.classList.add('has-error');
        isValid = false;
      } else {
        privacyGroup?.classList.remove('has-error');
      }

      if (!isValid) {
        quoteForm.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
        return;
      }

      const compiledDetails = [
        `Hola Pintor en Valencia 24/7, solicito presupuesto:`,
        `• Nombre: ${name}`,
        `• Teléfono: ${phone}`,
        email ? `• Email: ${email}` : null,
        zone ? `• Zona: ${zone}` : null,
        `• Servicio: ${service}`,
        meters ? `• Superficie: ${meters}` : null,
        `• Urgente 24/7: ${urgent ? 'Sí' : 'No'}`,
        `• Detalles: ${message}`
      ]
        .filter(Boolean)
        .join('\n');

      if (successWhatsappLink) {
        successWhatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(compiledDetails)}`;
      }
      if (successMailLink) {
        successMailLink.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
          `Presupuesto web — ${service} (${name})`
        )}&body=${encodeURIComponent(compiledDetails)}`;
      }

      if (formSuccessBox) {
        formSuccessBox.hidden = false;
        formSuccessBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    quoteForm.querySelectorAll('input, select, textarea').forEach((el) => {
      el.addEventListener('input', () => {
        el.closest('.field-group')?.classList.remove('has-error');
        el.setAttribute('aria-invalid', 'false');
      });
    });
  }
})();
