// Dashboard page implementation
const dashboardPage = {
  render: () => {
    const app = document.getElementById('app');
    
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main');
    
    // Add navigation
    const nav = components.createNavigation('dashboard');
    container.appendChild(nav);
    
    // Main content
    const main = utils.createElement('main', 'max-w-7xl mx-auto px-8 py-8');
    
    // Header
    const header = utils.createElement('div', 'mb-8 animate-fade-in');
    header.innerHTML = `
      <h1 class="text-3xl font-bold mb-2">Welcome back! 👋</h1>
      <p class="text-xl text-muted">Continue your learning journey and reach your goals.</p>
    `;
    main.appendChild(header);
    
    // Stats
    const stats = dashboardPage.createStats();
    main.appendChild(stats);
    
    // Active skills
    const activeSkills = dashboardPage.createActiveSkills();
    main.appendChild(activeSkills);
    
    container.appendChild(main);
    app.appendChild(container);
    
    dashboardPage.initAnimations();
  },

  createStats: () => {
    const stats = utils.createElement('div', 'grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in delay-200');
    stats.innerHTML = `
      <div class="card text-center p-6">
        <div class="text-3xl mb-2">📚</div>
        <div class="text-2xl font-bold mb-1">3</div>
        <div class="text-muted text-sm">Active Skills</div>
      </div>
      <div class="card text-center p-6">
        <div class="text-3xl mb-2">🏆</div>
        <div class="text-2xl font-bold mb-1">1</div>
        <div class="text-muted text-sm">Completed</div>
      </div>
      <div class="card text-center p-6">
        <div class="text-3xl mb-2">⏰</div>
        <div class="text-2xl font-bold mb-1">45h</div>
        <div class="text-muted text-sm">Total Hours</div>
      </div>
      <div class="card text-center p-6">
        <div class="text-3xl mb-2">🔥</div>
        <div class="text-2xl font-bold mb-1">7</div>
        <div class="text-muted text-sm">Day Streak</div>
      </div>
    `;
    return stats;
  },

  createActiveSkills: () => {
    const section = utils.createElement('div', 'animate-fade-in delay-400');
    section.innerHTML = `
      <h2 class="text-2xl font-bold mb-6">Your Active Skills</h2>
      <div class="space-y-4">
        <div class="card card-hover p-6">
          <div class="flex items-center gap-4">
            <div class="text-3xl">💻</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Web Development</h3>
              <div class="progress mb-3">
                <div class="progress-indicator" style="transform: translateX(-35%)"></div>
              </div>
              <div class="flex justify-between text-sm text-muted">
                <span>13 / 20 resources completed</span>
                <span>65% complete</span>
              </div>
              <button class="btn btn-primary mt-3">Continue</button>
            </div>
          </div>
        </div>
      </div>
    `;
    return section;
  },

  initAnimations: () => {
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-fade-in');
      animatedElements.forEach((el, index) => {
        utils.fadeIn(el, index * 100);
      });
    }, 100);
  }
};