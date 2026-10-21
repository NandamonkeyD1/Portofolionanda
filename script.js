/**
 * NANDA ARI WAHYU WIDAGDO — BOLD DIGITAL IDENTITY PORTFOLIO
 * High-performance vanilla JavaScript interactivity (Full English Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. DYNAMIC DATA FOR IN-PAGE CASE STUDY MODAL SYSTEM (FULL ENGLISH)
  // =========================================================================
  const caseStudiesData = {
    eraport: {
      id: 'eraport',
      title: 'E-Raport Management System',
      category: 'Web Application / Education Technology',
      badge: 'Case Study 01 // Education Technology',
      image: './raport.jpg',
      lead: 'An integrated academic governance and digital grading platform engineered for transparent evaluation between schools, educators, students, and parents.',
      tags: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Bootstrap', 'RBAC Security', 'Registered Copyright (PDKI 2025)'],
      sections: [
        {
          num: '01',
          title: 'Project Overview',
          content: 'E-Raport Management System is an enterprise educational web application engineered to modernize academic evaluation at vocational high schools (SMK). It unifies subject instructors, homeroom advisors, curriculum directors, and students into a cohesive ecosystem.'
        },
        {
          num: '02',
          title: 'Problem & Motivation',
          content: 'Manual score calculations via decentralized spreadsheets often caused weighted formula discrepancies, delayed semester card generation, and lacked real-time visibility for parents. This system automates weighted score calculations instantly with zero formula error.'
        },
        {
          num: '03',
          title: 'Key Contributions',
          content: 'Architected the normalized relational MySQL database schema, implemented strict Role-Based Access Control (RBAC) across 4 access tiers (Admin, Teachers, Homeroom Advisors, Students), and built automated standardized PDF report card generation.'
        },
        {
          num: '04',
          title: 'Outcome & Current Status',
          content: 'Drastically compressed the grade aggregation cycle from weeks down to hours following teacher submissions. Status: Fully verified and deployed in academic operations.'
        }
      ],
      linkStandalone: './projects/eraport.html',
      nextId: 'pos'
    },
    pos: {
      id: 'pos',
      title: 'Point of Sale for Restaurant',
      category: 'Business Software / Commerce',
      badge: 'Case Study 02 // Business Software',
      image: './pos.jpg',
      lead: 'A dedicated point of sale and transaction management application tailored for culinary operations (Soto Restaurant), featuring rapid checkout and automated sales reporting.',
      tags: ['PHP', 'MySQL', 'JavaScript (ES6)', 'Bootstrap', 'Thermal ESC/POS'],
      sections: [
        {
          num: '01',
          title: 'Project Overview',
          content: 'A responsive desktop and web POS system designed to streamline the complete dining lifecycle: table ordering, receipt printing, kitchen stock availability, and daily cashier reconciliations.'
        },
        {
          num: '02',
          title: 'Problem & Motivation',
          content: 'Peak rush-hour dining frequently caused long queues due to paper-based order tracking. Discrepancies between kitchen dish dispatches and physical cash drawer counts were eliminated through an auditable digital register.'
        },
        {
          num: '03',
          title: 'Key Contributions',
          content: 'Engineered zero-reload client-side transaction logic (sub-millisecond UI response), dynamic item addition, instant change calculation, table split-billing, and ESC/POS thermal printer integration.'
        },
        {
          num: '04',
          title: 'Outcome & Current Status',
          content: 'Cut customer checkout durations by up to 50% and eliminated human calculation errors on invoices. Status: Verified and completed.'
        }
      ],
      linkStandalone: './projects/pos.html',
      nextId: 'elfan'
    },
    elfan: {
      id: 'elfan',
      title: 'ELFAN Command Engine',
      category: 'IoT / Automation & Embedded',
      badge: 'Case Study 03 // IoT & Automation',
      image: './elfan-architecture.svg',
      lead: 'A hardware automation architecture driven by microcontrollers (ESP32 / Raspberry Pi) with an MQTT pub/sub pipeline for sensor telemetry and precision relay control.',
      tags: ['ESP32', 'Raspberry Pi', 'MQTT Protocol', 'C++', 'Node.js', 'WebSockets'],
      sections: [
        {
          num: '01',
          title: 'Project Overview',
          content: 'An independent hardware-to-cloud bridge connecting edge microcontroller nodes with live web telemetry dashboards using the ultra-lightweight MQTT publish/subscribe protocol.'
        },
        {
          num: '02',
          title: 'Architecture & Verified Layers',
          content: 'ESP32 microcontrollers actuate 4-channel optocoupled relays and read environmental analog sensors. A local Raspberry Pi host runs the Mosquitto broker, ensuring LAN automations continue running during internet outages.'
        },
        {
          num: '03',
          title: 'Implemented vs Experimental Distinction',
          content: 'VERIFIED IMPLEMENTATION: ESP32 C++ firmware with auto-reconnect, MQTT Pub/Sub GPIO switching, and real-time WebSocket dashboard (<35ms latency). EXPERIMENTAL LAB: Multi-node ESP-NOW mesh relaying and edge anomaly detection.'
        },
        {
          num: '04',
          title: 'Outcome & Current Status',
          content: 'Core command engine prototype validated through continuous stress-testing in lab environments. Status: Core Verified / Lab Research Active.'
        }
      ],
      linkStandalone: './projects/elfan.html',
      nextId: 'ecommerce'
    },
    ecommerce: {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      category: 'Web Development / Digital Product',
      badge: 'Case Study 04 // Digital Product',
      image: './ecommerce.jpg',
      lead: 'A modular digital commerce storefront with real-time product catalogs, shopping cart state management, checkout validation, and back-office inventory controls.',
      tags: ['Laravel', 'Vue.js', 'MySQL', 'RESTful APIs', 'Tailwind CSS'],
      sections: [
        {
          num: '01',
          title: 'Project Overview',
          content: 'An integrated storefront platform delivering an intuitive, responsive purchasing journey for customers, paired with a comprehensive administrative back-office for inventory and order fulfillment.'
        },
        {
          num: '02',
          title: 'Problem & Motivation',
          content: 'Replaces unstructured manual sales channels (chat orders) that suffer from missed delivery records, lost customer details, and accidental overselling during simultaneous order surges.'
        },
        {
          num: '03',
          title: 'Key Contributions',
          content: 'Designed multi-variant database models, asynchronous catalog filtering, transactional stock locking during checkout validation, and an administrative order management CMS.'
        },
        {
          num: '04',
          title: 'Outcome & Current Status',
          content: 'Produced a resilient, end-to-end purchasing workflow ready for live payment gateway integrations (Midtrans/Xendit). Status: Production Prototype Ready.'
        }
      ],
      linkStandalone: './projects/ecommerce.html',
      nextId: 'dashboard'
    },
    dashboard: {
      id: 'dashboard',
      title: 'Enterprise Dashboard & Data Analytics',
      category: 'UI/UX & Product Design',
      badge: 'Case Study 05 // UI/UX Design',
      image: './dashboardadmin.jpg',
      lead: 'A multi-tier data management interface designed in Figma with verified visual hierarchies, ergonomic business metrics, and high administrative efficiency.',
      tags: ['Figma', 'Design Systems', 'Auto-Layout', 'Information Architecture', 'WCAG 2.1'],
      sections: [
        {
          num: '01',
          title: 'Project Overview',
          content: 'An integrated analytical control panel engineered for at-a-glance monitoring of transactions, user activity metrics, and server operational logs, prioritizing dark-theme ocular ergonomics.'
        },
        {
          num: '02',
          title: 'Problem & Motivation',
          content: 'Eliminates cognitive fatigue (data overload) experienced by operators through modular spatial grouping and functional color coding for critical operational thresholds.'
        },
        {
          num: '03',
          title: 'Key Contributions',
          content: 'Engineered an end-to-end design system in Figma (semantic color tokens, auto-layout typography scale, reusable variants), modular KPI widgets, and high-fidelity interactive user flows.'
        },
        {
          num: '04',
          title: 'Outcome & Current Status',
          content: 'Adopted as the core interface design benchmark across internal software initiatives at Solvia Nova. Status: Production Design Ready.'
        }
      ],
      linkStandalone: './projects/dashboard.html',
      nextId: 'eraport'
    }
  };

  // =========================================================================
  // 2. STICKY NAVIGATION & ACTIVE SCROLL OBSERVER
  // =========================================================================
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  // Handle nav background on scroll
  function handleNavScroll() {
    if (window.scrollY > 40) {
      siteNav?.classList.add('scrolled');
    } else {
      siteNav?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section spy
  const sectionObserverOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -40% 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // =========================================================================
  // 3. CASE STUDY MODAL ENGINE
  // =========================================================================
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalCaseStudyContent');
  const modalCloseBtn = document.getElementById('closeCaseStudyModal');

  function openCaseStudy(projectId) {
    const data = caseStudiesData[projectId];
    if (!data || !modalBody || !modalBackdrop) return;

    let sectionsHtml = '';
    data.sections.forEach(sec => {
      sectionsHtml += `
        <div class="case-study-section-block">
          <h3><span class="section-num">${sec.num} /</span> ${sec.title}</h3>
          <p>${sec.content}</p>
        </div>
      `;
    });

    let tagsHtml = data.tags.map(t => `<span class="tech-tag-chip">${t}</span>`).join(' ');

    modalBody.innerHTML = `
      <div class="section-badge lime">${data.badge}</div>
      <h2 style="font-size: 2.2rem; margin-top: 0.5rem; margin-bottom: 0.8rem; letter-spacing: -0.02em;">${data.title}</h2>
      <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.75rem;">${data.lead}</p>
      
      <div class="case-study-hero-img-wrap">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${tagsHtml}
      </div>

      <div class="case-sections-wrap">
        ${sectionsHtml}
      </div>

      <div class="case-study-nav-footer">
        <a href="${data.linkStandalone}" class="btn btn-secondary btn-sm" target="_blank">
          Open Standalone Page ↗
        </a>
        <button type="button" class="btn btn-lime btn-sm switch-next-case" data-next="${data.nextId}">
          Next Project ↗
        </button>
      </div>
    `;

    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update URL Hash without jump
    history.replaceState(null, '', `#case-${projectId}`);

    // Re-bind next button inside modal
    const nextBtn = modalBody.querySelector('.switch-next-case');
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextId = nextBtn.getAttribute('data-next');
        openCaseStudy(nextId);
      });
    }
  }

  function closeCaseStudy() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Restore work hash
    if (window.location.hash.startsWith('#case-')) {
      history.replaceState(null, '', '#work');
    }
  }

  // Bind click on case study buttons & cards
  document.querySelectorAll('[data-open-case]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-open-case');
      openCaseStudy(projId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeCaseStudy);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeCaseStudy();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  // Check URL hash on load for deep linking (e.g. #case-eraport)
  if (window.location.hash.startsWith('#case-')) {
    const hashProj = window.location.hash.replace('#case-', '');
    if (caseStudiesData[hashProj]) {
      setTimeout(() => openCaseStudy(hashProj), 250);
    }
  }

  // =========================================================================
  // 4. CONTACT FORM & WHATSAPP DISPATCH ENGINE (FULL ENGLISH)
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showFormFeedback('Please fill in all required fields.', 'error');
        return;
      }

      // Basic email regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      showFormFeedback('Preparing transmission... Redirecting to Nanda on WhatsApp.', 'success');

      // WhatsApp format in English
      const waNumber = '6285741859067';
      const waText = encodeURIComponent(
        `Hello Nanda!\n\nName: ${name}\nEmail: ${email}\n\nProject / Inquiry:\n${message}\n\n(Sent via Nanda Portfolio)`
      );
      const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        contactForm.reset();
        showFormFeedback('Thank you! Message session launched via WhatsApp.', 'success');
      }, 700);
    });
  }

  function showFormFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-status-feedback ${type}`;
    formFeedback.style.display = 'block';
  }

  // =========================================================================
  // 5. DYNAMIC FOOTER YEAR
  // =========================================================================
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear().toString();
  }

  // =========================================================================
  // 6. SMOOTH SCROLL WITH ACCESSIBILITY
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.startsWith('#case-')) return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
        // Set focus for screen readers
        targetElem.setAttribute('tabindex', '-1');
        targetElem.focus({ preventScroll: true });
      }
    });
  });

  console.log('⚡ NANDA Portfolio Engine v3.0 Initialized // BOLD DIGITAL IDENTITY (EN)');
});
