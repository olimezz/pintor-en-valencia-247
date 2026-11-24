/**
 * PINTOR EN VALENCIA 24/7 — LÓGICA INTERACTIVA PRINCIPAL
 * Referencia oficial de datos: https://pintorenvalencia247.es
 * Teléfono llamadas: +34 643 55 44 85 | WhatsApp 24/7: +34 643 67 31 69
 * Correo: info@pintorenvalencia247.es
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '34643673169';
  const EMAIL_ADDRESS = 'info@pintorenvalencia247.es';

  /* =========================================================================
     DATOS DE LA GALERÍA BASADOS EN LOS PROYECTOS Y SERVICIOS REALES DE
     https://pintorenvalencia247.es
     Nota: Sustituye `realPhotoUrl: ''` por la ruta de la foto original de la web
     (ej. 'assets/proyectos/piso-90m2.jpg') cuando dispongas de los ficheros.
     ========================================================================= */
  const GALLERY_PROJECTS = [
    {
      id: 'piso-90m2-gotele',
      title: 'Pintura y alisado integral de piso (90 m²)',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Interiores · Alisado',
      surface: '90 m²',
      location: 'Valencia capital',
      realPhotoUrl: '', // [COMPLETAR CON RUTA DE FOTO REAL DE PINTORENVALENCIA247.ES]
      accent: '#F97316',
      summary:
        'Eliminación completa de gotelé, nivelado de paredes revisado con control de luz transversal y acabado final con pintura en esmalte al agua.',
      details: {
        problema: 'Vivienda de 90 m² con gotelé antiguo irregular y pérdida de luminosidad en salón y pasillo.',
        solucion:
          'Raspado/preparación, tendido de plaste de renovación, lijado fino con revisión mediante foco de luz transversal y aplicación de esmalte al agua lavable.',
        materiales: 'Plaste de alisado profesional, imprimación fijadora y esmalte al agua de alta lavabilidad.',
        notaReferencia: 'Proyecto real documentado en pintorenvalencia247.es (Sección Trabajos Realizados).'
      },
      svgType: 'living-smooth'
    },
    {
      id: 'alquiler-100m2',
      title: 'Modernización de vivienda para alquiler (Piso 100 m²)',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Interiores · Vivienda Alquiler',
      surface: '100 m²',
      location: 'Valencia (Zona residencial)',
      realPhotoUrl: '', // [COMPLETAR CON RUTA DE FOTO REAL DE PINTORENVALENCIA247.ES]
      accent: '#10B981',
      summary:
        'Puesta a punto integral enfocada al mercado de alquiler en Valencia, con saneamiento general de manchas de humedad y aplicación de colores luminosos e intensos.',
      details: {
        problema: 'Piso de 100 m² destinado al alquiler con desgaste previo, roces de mobiliario y manchas puntuales de humedad.',
        solucion:
          'Saneamiento general de paramentos afectados, sellado antimanchas y renovación estética combinando blanco luminoso con paredes de acento en tonos actuales.',
        materiales: 'Pintura plástica lavable de alta cubrición, sellador antimanchas y masilla reparadora.',
        notaReferencia: 'Proyecto real documentado en pintorenvalencia247.es (Sección Trabajos Realizados).'
      },
      svgType: 'rental-modern'
    },
    {
      id: 'humedades-12m2',
      title: 'Tratamiento de humedades por condensación (Habitación 12 m²)',
      categories: ['reformas', 'interiores'],
      categoryLabel: 'Reformas / Acabados · Antihumedad',
      surface: '12 m²',
      location: 'Valencia',
      realPhotoUrl: '', // [COMPLETAR CON RUTA DE FOTO REAL DE PINTORENVALENCIA247.ES]
      accent: '#2563EB',
      summary:
        'Erradicación de manchas de moho y humedad por condensación en dormitorio mediante masilla antihumedad y pintura de esmalte especial.',
      details: {
        problema: 'Dormitorio de 12 m² con condensación recurrente en esquinas y puente térmico junto a ventana.',
        solucion:
          'Limpieza higienizante del soporte, regularización con masilla antihumedad específica y sellado con pintura de esmalte especial resistente a la condensación.',
        materiales: 'Tratamiento fungicida previo, masilla antihumedad y esmalte técnico anticondensación.',
        notaReferencia: 'Proyecto real documentado en pintorenvalencia247.es (Sección Trabajos Realizados).'
      },
      svgType: 'humidity-shield'
    },
    {
      id: 'alisado-habitacion-optimizado',
      title: 'Alisado directo en habitación sobre gotelé duro',
      categories: ['interiores', 'reformas'],
      categoryLabel: 'Interiores · Optimización de Coste',
      surface: 'Dormitorio completo',
      location: 'Valencia',
      realPhotoUrl: '', // [COMPLETAR CON RUTA DE FOTO REAL DE PINTORENVALENCIA247.ES]
      accent: '#7C3AED',
      summary:
        'Alisado directo sobre gotelé duro en buen estado de adherencia para optimizar el presupuesto del cliente, finalizado con pintura plástica en color.',
      details: {
        problema: 'El cliente buscaba eliminar la textura de gotelé templado/plástico duro ajustando al máximo la inversión.',
        solucion:
          'Aplicación directa de capas de cubregotelé de alta adherencia, lijado sin polvo y acabado decorativo en pintura plástica a color.',
        materiales: 'Masilla cubregotelé de adherencia reforzada y pintura plástica mate sedoso en color.',
        notaReferencia: 'Proyecto real documentado en pintorenvalencia247.es (Sección Trabajos Realizados).'
      },
      svgType: 'room-color'
    },
    {
      id: 'saneamiento-escayola-humedad',
      title: 'Saneamiento de cuarto afectado con picado y escayola',
      categories: ['reformas'],
      categoryLabel: 'Reformas / Acabados · Rehabilitación',
      surface: 'Estancia completa',
      location: 'Valencia',
      realPhotoUrl: '', // [COMPLETAR CON RUTA DE FOTO REAL DE PINTORENVALENCIA247.ES]
      accent: '#EF4444',
      summary:
        'Reparación profunda de paramentos dañados por humedad mediante picado de zonas huecas, reconstrucción en escayola y acabado plástico transpirable.',
      details: {
        problema: 'Desconchones severos y revestimiento abombado por filtración previa ya reparada en estancia interior.',
        solucion:
          'Picado hasta soporte firme, reconstrucción geométrica en escayola/perlita, imprimación transpirable y terminación en pintura plástica transpirable.',
        materiales: 'Escayola y pasta de agarre, fijador transpirable y pintura plástica al agua permeable al vapor.',
        notaReferencia: 'Proyecto real documentado en pintorenvalencia247.es (Sección Trabajos Realizados).'
      },
      svgType: 'plaster-repair'
    },
    {
      id: 'locales-oficinas-empresas',
      title: 'Pintura de locales comerciales, restaurantes y oficinas',
      categories: ['locales'],
      categoryLabel: 'Locales y Empresas · 24/7',
      surface: '[COMPLETAR M² DE PROYECTO COMERCIAL REAL]',
      location: 'Valencia (Ruzafa / Extramurs / Centro)',
      realPhotoUrl: '', // [COMPLETAR CON FOTO REAL DE LOCAL/OFICINA DE PINTORENVALENCIA247.ES]
      accent: '#EAB308',
      summary:
        'Acondicionamiento cromático rápido para negocios, hostelería, oficinas, colegios y alquileres turísticos con flexibilidad horaria 24/7.',
      details: {
        problema: 'Necesidad de renovar imagen corporativa y paramentos sin detener la apertura comercial ni facturación del negocio.',
        solucion:
          'Planificación intensiva fuera de horario comercial (noches o fin de semana), pinturas de secado rápido sin olor y entrega limpia lista para abrir.',
        materiales: 'Esmaltes al agua sin olor y pintura plástica de alta resistencia al roce para zonas de alto tránsito.',
        notaReferencia: 'Servicio real para empresas en pintorenvalencia247.es — [COMPLETAR CON CASO CONCRETO DE LOCAL REAL SI SE DESEA].'
      },
      svgType: 'commercial-space'
    },
    {
      id: 'exteriores-metales-fachadas',
      title: 'Esmaltado de ventanas, verjas metálicas y exteriores',
      categories: ['exteriores'],
      categoryLabel: 'Exteriores y Metal',
      surface: '[COMPLETAR DETALLE DE PROYECTO EXTERIOR REAL]',
      location: 'Valencia y alrededores',
      realPhotoUrl: '', // [COMPLETAR CON FOTO REAL DE EXTERIORES / METALES DE PINTORENVALENCIA247.ES]
      accent: '#059669',
      summary:
        'Protección y esmaltado duradero en ventanas, verjas, barandillas, todo tipo de metales, parkings y zonas exteriores de comunidades y chalets.',
      details: {
        problema: 'Desgaste por exposición solar, humedad ambiental valenciana y oxidación superficial en carpintería metálica y paramentos exteriores.',
        solucion:
          'Cepillado/lijado de óxido, imprimación antioxidante y acabado en esmalte protector resistente a rayos UV e intemperie.',
        materiales: 'Imprimación anticorrosiva y esmalte sintético / poliuretano al agua para exterior.',
        notaReferencia: 'Servicio real de pintura en exteriores y metales en pintorenvalencia247.es — [COMPLETAR CON PROYECTO REAL CONCRETO].'
      },
      svgType: 'exterior-metal'
    }
  ];

  /* Generador de ilustraciones arquitectónicas SVG limpias (se sustituyen automáticamente si realPhotoUrl tiene valor) */
  function createProjectVisual(project) {
    if (project.realPhotoUrl && project.realPhotoUrl.trim() !== '') {
      return `<img src="${project.realPhotoUrl}" alt="${project.title}" class="project-svg-art" loading="lazy" />`;
    }

    const visuals = {
      'living-smooth': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <defs>
            <linearGradient id="wall1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#FFFBEB"/>
              <stop offset="100%" stop-color="#F1F5F9"/>
            </linearGradient>
          </defs>
          <rect width="480" height="280" fill="url(#wall1)"/>
          <polygon points="0,230 480,230 480,280 0,280" fill="#E2E8F0"/>
          <rect x="44" y="38" width="145" height="150" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
          <line x1="116" y1="38" x2="116" y2="188" stroke="#CBD5E1" stroke-width="3"/>
          <line x1="44" y1="113" x2="189" y2="113" stroke="#CBD5E1" stroke-width="3"/>
          <!-- Haz de luz transversal de control -->
          <polygon points="189,45 450,20 450,215 189,185" fill="#F97316" opacity="0.09"/>
          <rect x="240" y="65" width="175" height="115" rx="10" fill="#FFFFFF" stroke="#F97316" stroke-width="2"/>
          <text x="258" y="102" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F172A">Pared 100% Nivelada</text>
          <text x="258" y="124" font-family="sans-serif" font-size="11" fill="#475569">Control con luz transversal</text>
          <rect x="258" y="142" width="110" height="8" rx="4" fill="#F97316" opacity="0.8"/>
        </svg>`,
      'rental-modern': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#F8FAFC"/>
          <rect x="0" y="0" width="235" height="225" fill="#10B981" opacity="0.16"/>
          <rect x="235" y="0" width="245" height="225" fill="#FFFFFF"/>
          <rect x="0" y="225" width="480" height="55" fill="#E2E8F0"/>
          <rect x="145" y="145" width="190" height="80" rx="14" fill="#0F172A"/>
          <rect x="160" y="128" width="70" height="30" rx="8" fill="#10B981"/>
          <rect x="245" y="128" width="70" height="30" rx="8" fill="#F59E0B"/>
          <circle cx="375" cy="82" r="28" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
        </svg>`,
      'humidity-shield': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#EFF6FF"/>
          <rect x="40" y="34" width="400" height="212" rx="14" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2"/>
          <path d="M165 82 L240 54 L315 82 V146 C315 188 240 216 240 216 C240 216 165 188 165 146 Z" fill="#DBEAFE" stroke="#2563EB" stroke-width="3"/>
          <path d="M218 136 L234 152 L266 118" fill="none" stroke="#2563EB" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      'room-color': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#F5F3FF"/>
          <rect x="0" y="0" width="310" height="225" fill="#EDE9FE"/>
          <rect x="0" y="225" width="480" height="55" fill="#DDD6FE"/>
          <rect x="70" y="60" width="84" height="110" rx="8" fill="#FFFFFF" stroke="#7C3AED" stroke-width="2.5"/>
          <rect x="174" y="60" width="84" height="110" rx="8" fill="#FFFFFF" stroke="#EC4899" stroke-width="2.5"/>
          <rect x="338" y="88" width="96" height="32" rx="6" fill="#7C3AED"/>
          <rect x="382" y="120" width="8" height="62" rx="3" fill="#334155"/>
        </svg>`,
      'plaster-repair': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#FEF2F2"/>
          <rect x="48" y="38" width="384" height="204" rx="12" fill="#FFFFFF" stroke="#FECACA" stroke-width="2"/>
          <rect x="90" y="75" width="130" height="130" rx="8" fill="#F1F5F9" stroke="#CBD5E1" stroke-dasharray="5 5" stroke-width="2"/>
          <rect x="260" y="75" width="130" height="130" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2.5"/>
          <path d="M228 140 H252 M244 132 L252 140 L244 148" fill="none" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
      'commercial-space': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#FEFCE8"/>
          <rect x="65" y="45" width="350" height="195" rx="10" fill="#FFFFFF" stroke="#FDE047" stroke-width="2.5"/>
          <rect x="65" y="45" width="350" height="44" rx="10" fill="#0F172A"/>
          <circle cx="92" cy="67" r="6" fill="#F43F5E"/>
          <circle cx="112" cy="67" r="6" fill="#EAB308"/>
          <circle cx="132" cy="67" r="6" fill="#10B981"/>
          <rect x="95" y="115" width="135" height="100" rx="6" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
          <rect x="255" y="115" width="130" height="125" rx="6" fill="#FEF9C3" stroke="#EAB308" stroke-width="2"/>
        </svg>`,
      'exterior-metal': `
        <svg viewBox="0 0 480 280" class="project-svg-art" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${project.title}">
          <rect width="480" height="280" fill="#ECFDF5"/>
          <rect x="70" y="55" width="340" height="175" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
          <!-- Reja / barandilla metálica esmaltada -->
          <g stroke="#0F172A" stroke-width="4" stroke-linecap="round">
            <line x1="100" y1="90" x2="380" y2="90"/>
            <line x1="100" y1="195" x2="380" y2="195"/>
            <line x1="125" y1="80" x2="125" y2="205"/>
            <line x1="165" y1="80" x2="165" y2="205"/>
            <line x1="205" y1="80" x2="205" y2="205"/>
            <line x1="245" y1="80" x2="245" y2="205"/>
            <line x1="285" y1="80" x2="285" y2="205"/>
            <line x1="325" y1="80" x2="325" y2="205"/>
            <line x1="360" y1="80" x2="360" y2="205"/>
          </g>
        </svg>`
    };

    return visuals[project.svgType] || visuals['living-smooth'];
  }

  /* =========================================================================
     1. NAVEGACIÓN MOBILE-FIRST Y OBSERVADOR DE SECCIÓN ACTIVA
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

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

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

  // Resaltado dinámico de sección activa en menú
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
     2. COMPARADOR INTERACTIVO ANTES / DESPUÉS EN HERO
     ========================================================================= */
  const compareRange = document.getElementById('compareRange');
  const compareAfter = document.getElementById('compareAfter');
  const compareDivider = document.getElementById('compareDivider');
  const compareHandle = document.getElementById('compareHandle');

  if (compareRange && compareAfter && compareDivider && compareHandle) {
    const updateComparison = (val) => {
      const pct = Math.min(95, Math.max(5, Number(val)));
      compareAfter.style.clipPath = `inset(0 0 0 ${pct}%)`;
      compareDivider.style.left = `${pct}%`;
      compareHandle.style.left = `${pct}%`;
    };
    compareRange.addEventListener('input', (e) => updateComparison(e.target.value));
    updateComparison(compareRange.value);
  }

  /* =========================================================================
     3. GALERÍA DINÁMICA DE TRABAJOS + MODAL LIGHTBOX
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

  let activeFilter = 'todos';
  let visibleProjects = [...GALLERY_PROJECTS];
  let currentProjectIndex = 0;
  let lastFocusedElement = null;

  function renderGallery(filter = 'todos') {
    if (!galleryGrid) return;
    activeFilter = filter;
    visibleProjects =
      filter === 'todos'
        ? [...GALLERY_PROJECTS]
        : GALLERY_PROJECTS.filter((p) => p.categories.includes(filter));

    galleryGrid.innerHTML = visibleProjects
      .map(
        (project, idx) => `
      <article class="project-card" data-project-idx="${idx}">
        <div class="project-thumb" data-open-idx="${idx}" tabindex="0" role="button" aria-label="Ver detalles de ${project.title}">
          ${createProjectVisual(project)}
          <span class="project-category-pill">${project.categoryLabel}</span>
          <span class="project-surface-pill">${project.surface}</span>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <button type="button" class="project-open-btn" data-open-idx="${idx}">
            Ver ficha técnica y foto ampliada
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
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

    lightboxVisual.innerHTML = createProjectVisual(proj);
    lightboxCategory.textContent = proj.categoryLabel;
    lightboxSurface.textContent = proj.surface;
    lightboxLocation.textContent = proj.location;
    lightboxTitle.textContent = proj.title;
    lightboxSummary.textContent = proj.summary;

    lightboxSpecs.innerHTML = `
      <div><strong>Situación inicial:</strong> ${proj.details.problema}</div>
      <div><strong>Trabajo realizado:</strong> ${proj.details.solucion}</div>
      <div><strong>Materiales aplicados:</strong> ${proj.details.materiales}</div>
      <div><strong>Fuente / Imagen:</strong> <span class="placeholder-tag">${
        proj.realPhotoUrl
          ? 'Fotografía original cargada'
          : '[COMPLETAR CON FOTO REAL DE PINTORENVALENCIA247.ES] — ' + proj.details.notaReferencia
      }</span></div>
    `;

    lightboxQuoteBtn.onclick = () => {
      closeLightbox();
      const messageField = document.getElementById('contactMessage');
      const serviceField = document.getElementById('contactService');
      if (messageField) {
        messageField.value = `Hola, me gustaría pedir presupuesto para un trabajo similar a: "${proj.title}". `;
      }
      if (serviceField && proj.categories.includes('reformas')) {
        serviceField.value = 'Alisado de gotelé / Humedades';
      }
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    lastFocusedElement = document.activeElement;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

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
          const isMatch = b === btn;
          b.classList.toggle('is-active', isMatch);
          b.setAttribute('aria-pressed', String(isMatch));
        });
        renderGallery(filter);
      });
    });

    galleryGrid.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-idx]');
      if (trigger) {
        openLightbox(Number(trigger.getAttribute('data-open-idx')));
      }
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
    const prevIdx = (currentProjectIndex - 1 + visibleProjects.length) % visibleProjects.length;
    openLightbox(prevIdx);
  });

  lightboxNext?.addEventListener('click', () => {
    const nextIdx = (currentProjectIndex + 1) % visibleProjects.length;
    openLightbox(nextIdx);
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
     4. CONFIGURADOR RÁPIDO DE SOLICITUD DE PRESUPUESTO (SECCIÓN PRECIOS)
     ========================================================================= */
  const estType = document.getElementById('estType');
  const estMeters = document.getElementById('estMeters');
  const estMetersOutput = document.getElementById('estMetersOutput');
  const estState = document.getElementById('estState');
  const estUrgency = document.getElementById('estUrgency');
  const estSummaryText = document.getElementById('estSummaryText');
  const estWhatsappBtn = document.getElementById('estWhatsappBtn');
  const estToFormBtn = document.getElementById('estToFormBtn');

  function updateEstimatorSummary() {
    if (!estType || !estMeters || !estState || !estUrgency || !estSummaryText) return;
    const m2 = estMeters.value;
    if (estMetersOutput) estMetersOutput.textContent = `${m2} m²`;

    const summary = `Solicitud para ${estType.value} (~${m2} m² en Valencia). Estado de paredes: ${estState.value}. Plazo / disponibilidad: ${estUrgency.value}.`;
    estSummaryText.textContent = summary;

    const waText = encodeURIComponent(
      `Hola Pintor en Valencia 24/7, me gustaría solicitar un presupuesto sin compromiso:\n• Inmueble: ${estType.value}\n• Superficie aprox.: ${m2} m²\n• Estado actual: ${estState.value}\n• Disponibilidad: ${estUrgency.value}`
    );
    if (estWhatsappBtn) {
      estWhatsappBtn.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`);
    }
  }

  [estType, estMeters, estState, estUrgency].forEach((el) => {
    el?.addEventListener('input', updateEstimatorSummary);
    el?.addEventListener('change', updateEstimatorSummary);
  });
  updateEstimatorSummary();

  estToFormBtn?.addEventListener('click', () => {
    const contactService = document.getElementById('contactService');
    const contactMeters = document.getElementById('contactMeters');
    const contactMessage = document.getElementById('contactMessage');
    const contactUrgent = document.getElementById('contactUrgent');

    if (contactMeters && estMeters) contactMeters.value = `${estMeters.value} m²`;
    if (contactUrgent && estUrgency) {
      contactUrgent.checked = estUrgency.value.toLowerCase().includes('urgencia');
    }
    if (contactService && estState) {
      if (estState.value.includes('gotelé')) contactService.value = 'Alisado de gotelé / Humedades';
      else if (estState.value.includes('humedad')) contactService.value = 'Alisado de gotelé / Humedades';
    }
    if (contactMessage && estSummaryText) {
      contactMessage.value = estSummaryText.textContent + ' ¿Podrían indicarme presupuesto orientativo?';
    }
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('contactName')?.focus();
  });

  /* =========================================================================
     5. VALIDACIÓN DEL FORMULARIO DE CONTACTO Y CONFIRMACIÓN VISUAL
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

      // Nombre obligatorio (mínimo 2 caracteres)
      if (name.length < 2) {
        setFieldError('contactName', true);
        isValid = false;
      } else {
        setFieldError('contactName', false);
      }

      // Teléfono español / internacional básico (mínimo 9 dígitos)
      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 9) {
        setFieldError('contactPhone', true);
        isValid = false;
      } else {
        setFieldError('contactPhone', false);
      }

      // Email opcional, pero si se rellena debe ser válido
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email !== '' && !emailRegex.test(email)) {
        setFieldError('contactEmail', true);
        isValid = false;
      } else {
        setFieldError('contactEmail', false);
      }

      // Servicio obligatorio
      if (!service) {
        setFieldError('contactService', true);
        isValid = false;
      } else {
        setFieldError('contactService', false);
      }

      // Descripción mínima
      if (message.length < 8) {
        setFieldError('contactMessage', true);
        isValid = false;
      } else {
        setFieldError('contactMessage', false);
      }

      // Aceptación de privacidad
      const privacyGroup = document.getElementById('contactPrivacy')?.closest('.field-group');
      if (!privacy) {
        privacyGroup?.classList.add('has-error');
        isValid = false;
      } else {
        privacyGroup?.classList.remove('has-error');
      }

      if (!isValid) {
        const firstInvalid = quoteForm.querySelector('.has-error input, .has-error select, .has-error textarea');
        firstInvalid?.focus();
        return;
      }

      // Construir enlaces directos de envío real (WhatsApp 24/7 + Email info@pintorenvalencia247.es)
      const compiledDetails = [
        `Hola Pintor en Valencia 24/7, solicito presupuesto desde la web:`,
        `• Nombre: ${name}`,
        `• Teléfono: ${phone}`,
        email ? `• Email: ${email}` : null,
        zone ? `• Zona en Valencia: ${zone}` : null,
        `• Servicio: ${service}`,
        meters ? `• Superficie aprox.: ${meters}` : null,
        `• Urgencia 24/7: ${urgent ? 'Sí, urgente' : 'Normal / Programado'}`,
        `• Detalles: ${message}`
      ]
        .filter(Boolean)
        .join('\n');

      if (successWhatsappLink) {
        successWhatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(compiledDetails)}`;
      }
      if (successMailLink) {
        const mailSubject = encodeURIComponent(`Solicitud de presupuesto web — ${service} (${name})`);
        const mailBody = encodeURIComponent(compiledDetails);
        successMailLink.href = `mailto:${EMAIL_ADDRESS}?subject=${mailSubject}&body=${mailBody}`;
      }

      if (formSuccessBox) {
        formSuccessBox.hidden = false;
        formSuccessBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // Limpiar error al escribir
    quoteForm.querySelectorAll('input, select, textarea').forEach((el) => {
      el.addEventListener('input', () => {
        el.closest('.field-group')?.classList.remove('has-error');
        el.setAttribute('aria-invalid', 'false');
      });
    });
  }
})();
