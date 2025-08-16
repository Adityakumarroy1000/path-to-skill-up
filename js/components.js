// Reusable components
const components = {
  // Navigation component
  createNavigation: (currentPage = '') => {
    const nav = utils.createElement('nav', 'nav');
    nav.innerHTML = `
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex justify-between items-center py-4">
          <a href="#/" class="flex items-center space-x-3 group">
            <div class="text-2xl transition-transform group-hover:scale-110">🌱</div>
            <h1 class="text-xl font-bold text-primary">SkillSprout</h1>
          </a>
          <div class="flex items-center space-x-4">
            <a href="#/skills" class="btn btn-outline">Browse Skills</a>
            ${utils.getFromStorage('isLoggedIn') ? 
              '<a href="#/dashboard" class="btn btn-outline">Dashboard</a>' : 
              '<a href="#/login" class="btn btn-outline">Sign In</a>'
            }
            <button id="theme-toggle" class="theme-toggle">
              <span id="theme-icon">${utils.getTheme() === 'dark' ? '☀️' : '🌙'}</span>
            </button>
            ${utils.getFromStorage('isLoggedIn') ? 
              '<button id="logout-btn" class="btn btn-primary">Logout</button>' : 
              '<a href="#/signup" class="btn btn-gradient">Get Started</a>'
            }
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    const themeToggle = nav.querySelector('#theme-toggle');
    const themeIcon = nav.querySelector('#theme-icon');
    const logoutBtn = nav.querySelector('#logout-btn');

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const newTheme = utils.toggleTheme();
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        utils.removeFromStorage('isLoggedIn');
        utils.removeFromStorage('userEmail');
        utils.removeFromStorage('userName');
        utils.removeFromStorage('userProfile');
        utils.removeFromStorage('profileCompleted');
        window.location.hash = '/';
        utils.showToast('Logged out successfully');
      });
    }

    return nav;
  },

  // Card component
  createCard: (content, className = '') => {
    const card = utils.createElement('div', `card ${className}`);
    card.innerHTML = content;
    return card;
  },

  // Button component
  createButton: (text, onClick, className = 'btn-primary') => {
    const button = utils.createElement('button', `btn ${className}`, text);
    if (onClick) button.addEventListener('click', onClick);
    return button;
  },

  // Input component
  createInput: (type, placeholder, name, required = false) => {
    const input = utils.createElement('input', 'input');
    input.type = type;
    input.placeholder = placeholder;
    input.name = name;
    if (required) input.required = true;
    return input;
  },

  // Progress bar component
  createProgressBar: (value, max = 100) => {
    const progress = utils.createElement('div', 'progress');
    const indicator = utils.createElement('div', 'progress-indicator');
    indicator.style.transform = `translateX(-${100 - (value / max * 100)}%)`;
    progress.appendChild(indicator);
    return progress;
  },

  // Badge component
  createBadge: (text, className = '') => {
    return utils.createElement('span', `badge ${className}`, text);
  },

  // Skill card component
  createSkillCard: (skill) => {
    const card = components.createCard(`
      <div class="p-6">
        <div class="flex items-center gap-4 mb-4">
          <div class="text-4xl">${skill.icon}</div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-primary mb-2">${skill.title}</h3>
            <p class="text-muted text-sm">${skill.description}</p>
          </div>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-muted">${skill.resources} resources</span>
            <span class="badge">${skill.difficulty}</span>
          </div>
          <div class="flex gap-2">
            ${skill.tags.map(tag => `<span class="badge text-xs">${tag}</span>`).join('')}
          </div>
          <button class="btn btn-gradient w-full skill-btn" data-skill-id="${skill.id}">
            Start Learning
          </button>
        </div>
      </div>
    `, 'card-hover animate-fade-in');

    return card;
  },

  // Hero section
  createHeroSection: () => {
    const hero = utils.createElement('section', 'text-center py-8 mb-8');
    hero.innerHTML = `
      <div class="animate-fade-in">
        <h1 class="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Grow Your Skills with SkillSprout 🌱
        </h1>
        <p class="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Discover curated learning paths, track your progress, and master new skills 
          with our interactive platform designed for modern learners.
        </p>
        <div class="flex gap-4 justify-center animate-slide-left delay-200">
          <a href="#/skills" class="btn btn-gradient">Explore Skills</a>
          <a href="#/signup" class="btn btn-outline">Join Now</a>
        </div>
      </div>
    `;
    return hero;
  },

  // Loading spinner
  createLoadingSpinner: () => {
    const spinner = utils.createElement('div', 'flex items-center justify-center py-8');
    spinner.innerHTML = `
      <div style="width: 32px; height: 32px; border: 3px solid hsl(var(--border)); border-top: 3px solid hsl(var(--primary)); border-radius: 50%; animation: spin 1s linear infinite;"></div>
    `;
    return spinner;
  }
};