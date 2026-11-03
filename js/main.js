/* Portfolio rendering and interactions */

(function () {
  'use strict';

  // ── Render helpers ──

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'className') node.className = v;
        else if (k === 'innerHTML') node.innerHTML = v;
        else if (k === 'textContent') node.textContent = v;
        else if (k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), v);
        else node.setAttribute(k, v);
      });
    }
    if (children) {
      children.forEach((c) => {
        if (typeof c === 'string') node.appendChild(document.createTextNode(c));
        else if (c) node.appendChild(c);
      });
    }
    return node;
  }

  function tagPills(tags) {
    return tags.map((t) => `<span class="tag">${t}</span>`).join('');
  }

  // ── Hero tech badges ──
  function renderHeroTech() {
    const container = document.getElementById('hero-tech');
    if (!container) return;
    HERO_TECH.forEach((tech) => {
      container.appendChild(el('span', { className: 'tech-badge' }, [tech]));
    });
  }

  // ── About stats ──
  function renderAboutStats() {
    const container = document.getElementById('about-stats');
    if (!container) return;
    ABOUT_STATS.forEach((s) => {
      container.appendChild(
        el('div', { className: 'about-stat reveal' }, [
          el('div', { className: 'about-stat-value', textContent: s.value }),
          el('div', { className: 'about-stat-label', textContent: s.label }),
        ])
      );
    });
  }

  // ── Expertise ──
  function renderExpertise() {
    const container = document.getElementById('expertise-grid');
    if (!container) return;
    EXPERTISE.forEach((cat) => {
      const items = cat.items.map((item) => el('li', { textContent: item }));
      container.appendChild(
        el('div', { className: 'expertise-card reveal' }, [
          el('h3', { className: 'expertise-title', textContent: cat.title }),
          el('ul', { className: 'expertise-list' }, items),
        ])
      );
    });
  }

  const PHONE_THEME = {
    'paintit-ai': 'linear-gradient(165deg, #4a2a72 0%, #1a1028 70%)',
    'water-now': 'linear-gradient(165deg, #1a6d8a 0%, #0c2430 70%)',
    banking: 'linear-gradient(165deg, #1f6b42 0%, #0d2418 70%)',
  };

  // ── Featured Apps ──
  function renderFeaturedApps() {
    const container = document.getElementById('featured-apps');
    if (!container) return;
    FEATURED_APPS.forEach((app) => {
      const card = el('article', {
        className: 'app-card reveal',
        'data-project-id': app.id,
        role: 'button',
        tabindex: '0',
        'aria-label': `View details for ${app.name}`,
      });

      const banks = app.banks
        ? el('div', { className: 'bank-logos' }, app.banks.map((b) => el('span', { className: 'bank-pill', textContent: b })))
        : null;

      const actions = el('div', { className: 'card-actions' });
      if (app.appStore) {
        actions.appendChild(
          el('a', {
            href: app.appStore,
            className: 'card-link',
            target: '_blank',
            rel: 'noopener noreferrer',
            innerHTML: 'App Store <span aria-hidden="true">↗</span>',
            onclick: (e) => e.stopPropagation(),
          })
        );
      }
      actions.appendChild(
        el('button', {
          className: 'card-link card-link-btn',
          type: 'button',
          textContent: 'Details',
        })
      );

      const theme = PHONE_THEME[app.id] || 'linear-gradient(165deg, #2c313a 0%, #14161a 70%)';

      card.appendChild(
        el('div', { className: 'showcase-copy' }, [
          el('p', { className: 'showcase-kicker', textContent: 'iOS App' }),
          el('div', { className: 'app-card-header' }, [
            el('div', {
              className: 'app-icon',
              style: `background:${app.iconBg}`,
              innerHTML: app.icon,
            }),
            el('div', {}, [
              el('h3', { className: 'app-name', textContent: app.name }),
              el('p', { className: 'app-subtitle', textContent: app.subtitle }),
            ]),
          ]),
          el('p', { className: 'app-desc', textContent: app.description }),
          el('div', { className: 'project-tags', innerHTML: tagPills(app.technologies) }),
          banks,
          actions,
        ])
      );

      card.appendChild(
        el('div', { className: 'showcase-device', 'aria-hidden': 'true' }, [
          el('div', { className: 'phone' }, [
            el('div', { className: 'phone-screen', style: `background:${theme}` }, [
              el('span', { className: 'phone-island' }),
              el('div', { className: 'phone-app' }, [
                el('div', { className: 'app-icon', style: `background:${app.iconBg}`, innerHTML: app.icon }),
                el('p', { textContent: app.name }),
                el('span', { textContent: app.subtitle || '' }),
              ]),
            ]),
          ]),
        ])
      );

      card.addEventListener('click', () => openModal(app.id, 'app'));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(app.id, 'app');
        }
      });
      card.querySelector('.card-link-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(app.id, 'app');
      });

      container.appendChild(card);
    });
  }

  // ── Live Apps ──
  function renderLiveApps() {
    const container = document.getElementById('live-apps-grid');
    if (!container) return;
    LIVE_APPS.forEach((app) => {
      const card = el('a', {
        className: 'live-app-card reveal',
        href: app.appStore,
        target: '_blank',
        rel: 'noopener noreferrer',
      });
      card.appendChild(
        el('div', { className: 'live-app-header' }, [
          el('div', {
            className: 'app-icon app-icon-sm',
            style: `background:${app.iconBg}`,
            innerHTML: app.icon,
          }),
          el('span', { className: 'live-app-arrow', 'aria-hidden': 'true', textContent: '↗' }),
        ])
      );
      card.appendChild(el('h3', { className: 'app-name', textContent: app.name }));
      card.appendChild(el('p', { className: 'app-desc', textContent: app.description }));
      card.appendChild(el('div', { className: 'project-tags', innerHTML: tagPills(app.technologies) }));
      container.appendChild(card);
    });
  }

  // ── GitHub Projects ──
  function renderGitHubProjects() {
    const container = document.getElementById('github-projects');
    if (!container) return;
    GITHUB_PROJECTS.forEach((proj) => {
      const card = el('article', {
        className: 'github-card reveal',
        'data-project-id': proj.id,
        role: 'button',
        tabindex: '0',
        'aria-label': `View details for ${proj.name}`,
      });

      const actions = el('div', { className: 'card-actions' });
      actions.appendChild(
        el('a', {
          href: proj.repo,
          className: 'card-link',
          target: '_blank',
          rel: 'noopener noreferrer',
          innerHTML: 'GitHub <span aria-hidden="true">↗</span>',
          onclick: (e) => e.stopPropagation(),
        })
      );
      actions.appendChild(
        el('button', {
          className: 'card-link card-link-btn',
          type: 'button',
          textContent: 'Details',
        })
      );

      card.appendChild(
        el('div', { className: 'app-card-header' }, [
          el('div', {
            className: 'app-icon',
            style: `background:${proj.iconBg}`,
            innerHTML: proj.icon,
          }),
          el('div', {}, [
            el('h3', { className: 'app-name', textContent: proj.name }),
          ]),
        ])
      );
      card.appendChild(el('p', { className: 'app-desc', textContent: proj.description }));
      card.appendChild(el('div', { className: 'project-tags', innerHTML: tagPills(proj.technologies) }));
      card.appendChild(actions);

      card.addEventListener('click', () => openModal(proj.id, 'github'));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(proj.id, 'github');
        }
      });
      card.querySelector('.card-link-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(proj.id, 'github');
      });

      container.appendChild(card);
    });

    container.parentElement?.appendChild(
      el('p', { className: 'more-projects reveal', innerHTML: 'Many more projects available on <a href="' + SITE.github + '" target="_blank" rel="noopener noreferrer">GitHub</a>.' })
    );
  }

  // ── Experience ──
  function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;
    EXPERIENCE.forEach((exp, i) => {
      const badge = exp.badge
        ? el('span', {
            className: `exp-badge${exp.badgeType === 'current' ? ' current' : ''}`,
            textContent: exp.badge,
          })
        : null;

      const meta = el('div', { className: 'exp-meta' }, [
        el('span', { className: 'exp-company', textContent: exp.company }),
      ]);
      if (badge) meta.appendChild(badge);

      container.appendChild(
        el('div', { className: `timeline-item reveal${i === 0 ? ' active' : ''}` }, [
          meta,
          el('div', { className: 'exp-role', textContent: exp.role }),
          el('div', { className: 'exp-period', textContent: `${exp.period} · ${exp.location}` }),
          el('ul', { className: 'exp-desc' }, exp.highlights.map((h) => el('li', { textContent: h }))),
        ])
      );
    });
  }

  // ── Engineering Approach ──
  function renderApproach() {
    const container = document.getElementById('approach-grid');
    if (!container) return;
    ENGINEERING_APPROACH.forEach((item) => {
      container.appendChild(
        el('div', { className: 'approach-card reveal' }, [
          el('span', { className: 'approach-num', textContent: item.num }),
          el('h3', { className: 'approach-title', textContent: item.title }),
          el('p', { className: 'approach-desc', textContent: item.description }),
        ])
      );
    });
  }

  // ── Shipping Pipeline ──
  function renderPipeline() {
    const container = document.getElementById('shipping-pipeline');
    if (!container) return;
    SHIPPING_PIPELINE.forEach((step, i) => {
      container.appendChild(el('div', { className: 'pipeline-step reveal' }, [
        el('span', { className: 'pipeline-dot' }),
        el('span', { className: 'pipeline-label', textContent: step }),
      ]));
      if (i < SHIPPING_PIPELINE.length - 1) {
        container.appendChild(el('span', { className: 'pipeline-arrow reveal', 'aria-hidden': 'true', textContent: '↓' }));
      }
    });
  }

  // ── Achievements ──
  function renderAchievements() {
    const container = document.getElementById('achievements-grid');
    if (!container) return;
    ACHIEVEMENTS.forEach((a) => {
      const inner = [
        el('div', { className: 'achievement-icon', textContent: a.icon }),
        el('h3', { className: 'achievement-title', textContent: a.title }),
        el('p', { className: 'achievement-sub', textContent: a.subtitle }),
        el('p', { className: 'achievement-detail', textContent: a.detail }),
      ];
      if (a.link) {
        container.appendChild(
          el('a', {
            className: 'achievement-card reveal',
            href: a.link,
            target: '_blank',
            rel: 'noopener noreferrer',
          }, inner)
        );
      } else {
        container.appendChild(el('div', { className: 'achievement-card reveal' }, inner));
      }
    });
  }

  // ── Modal ──
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  let lastFocus = null;

  function openModal(id, type) {
    const data =
      type === 'app'
        ? FEATURED_APPS.find((a) => a.id === id)
        : GITHUB_PROJECTS.find((p) => p.id === id);
    if (!data || !modal || !modalBody) return;

    lastFocus = document.activeElement;

    const sections = [];

    sections.push(`<div class="modal-header">
      <div class="app-icon" style="background:${data.iconBg}">${data.icon}</div>
      <div>
        <h2 id="modal-title">${data.name}</h2>
        ${data.subtitle ? `<p class="modal-subtitle">${data.subtitle}</p>` : ''}
      </div>
    </div>`);

    sections.push(`<p class="modal-overview">${data.description}</p>`);

    if (data.problem) {
      sections.push(`<div class="modal-section"><h3>Problem</h3><p>${data.problem}</p></div>`);
    }
    if (data.solution) {
      sections.push(`<div class="modal-section"><h3>Solution</h3><p>${data.solution}</p></div>`);
    }
    if (data.architecture) {
      sections.push(`<div class="modal-section"><h3>Architecture</h3><p>${data.architecture}</p></div>`);
    }
    if (data.features?.length) {
      sections.push(`<div class="modal-section"><h3>Key Features</h3><ul>${data.features.map((f) => `<li>${f}</li>`).join('')}</ul></div>`);
    }
    if (data.contribution) {
      sections.push(`<div class="modal-section"><h3>My Contribution</h3><p>${data.contribution}</p></div>`);
    }
    if (data.highlight) {
      sections.push(`<div class="modal-section"><h3>What Makes It Interesting</h3><p>${data.highlight}</p></div>`);
    }

    sections.push(`<div class="modal-section"><h3>Technologies</h3><div class="project-tags">${tagPills(data.technologies)}</div></div>`);

    if (data.banks?.length) {
      sections.push(`<div class="modal-section"><h3>Institutions</h3><div class="bank-logos">${data.banks.map((b) => `<span class="bank-pill">${b}</span>`).join('')}</div></div>`);
    }

    const links = [];
    if (data.appStore) links.push(`<a href="${data.appStore}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">App Store ↗</a>`);
    if (data.repo) links.push(`<a href="${data.repo}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`);
    if (links.length) sections.push(`<div class="modal-actions">${links.join('')}</div>`);

    modalBody.innerHTML = sections.join('');
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close')?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  }

  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  // ── Mobile nav ──
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function closeNav() {
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks?.classList.remove('open');
    navOverlay?.classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navLinks?.classList.toggle('open');
    navOverlay?.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });

  navOverlay?.addEventListener('click', closeNav);
  navLinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));

  // ── Active nav on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = '';
    sections.forEach((s) => {
      if (s.offsetTop <= scrollY) current = s.id;
    });
    navItems.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  // ── Scroll reveal ──
  function initReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (prefersReduced) {
      reveals.forEach((el) => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // ── Nav background on scroll ──
  const nav = document.querySelector('nav');
  function updateNav() {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNav();
  }

  // ── Role notepad ──
  function initRoles() {
    const sheet = document.getElementById('role-sheet');
    if (!sheet) return;
    const roles = ['iOS Engineer', 'SwiftUI Developer', 'FinTech Specialist'];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let index = 0;
    window.setInterval(() => {
      sheet.classList.add('flip');
      window.setTimeout(() => {
        index = (index + 1) % roles.length;
        sheet.textContent = roles[index];
      }, 240);
      window.setTimeout(() => sheet.classList.remove('flip'), 620);
    }, 2800);
  }

  // ── Dhaka clock ──
  function initClock() {
    const node = document.getElementById('local-time');
    if (!node) return;
    const tick = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dhaka',
      }).format(now);
      const date = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Dhaka',
      }).format(now);
      node.textContent = `${time} · ${date}`;
      node.setAttribute('datetime', now.toISOString());
    };
    tick();
    window.setInterval(tick, 30000);
  }

  // ── Init ──
  function init() {
    renderHeroTech();
    renderAboutStats();
    renderExpertise();
    renderFeaturedApps();
    renderLiveApps();
    renderGitHubProjects();
    renderExperience();
    renderApproach();
    renderPipeline();
    renderAchievements();
    initRoles();
    initClock();
    initReveal();
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
