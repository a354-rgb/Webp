(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const navigationLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const year = document.getElementById('current-year');
  const desktopQuery = window.matchMedia('(min-width: 761px)');

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
    navigation.classList.remove('is-open');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
      menuButton.setAttribute('aria-label', isExpanded ? '메뉴 열기' : '메뉴 닫기');
      navigation.classList.toggle('is-open', !isExpanded);
    });

    navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (menuButton.getAttribute('aria-expanded') !== 'true') return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    desktopQuery.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  // 화면에 보이는 섹션에 맞춰 네비게이션 현재 위치를 표시합니다.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isCurrent);
          if (isCurrent) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-34% 0px -56% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }
})();
