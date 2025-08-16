// Index page implementation
const indexPage = {
  render: () => {
    const app = document.getElementById('app');
    
    // Create main container
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main');
    
    // Add navigation
    const nav = components.createNavigation('home');
    container.appendChild(nav);
    
    // Main content
    const main = utils.createElement('main', 'max-w-7xl mx-auto px-8 py-8');
    
    // Hero section
    const hero = components.createHeroSection();
    main.appendChild(hero);
    
    // Features section
    const features = indexPage.createFeaturesSection();
    main.appendChild(features);
    
    // Stats section
    const stats = indexPage.createStatsSection();
    main.appendChild(stats);
    
    // Popular skills section
    const popularSkills = indexPage.createPopularSkillsSection();
    main.appendChild(popularSkills);
    
    // CTA section
    const cta = indexPage.createCTASection();
    main.appendChild(cta);
    
    // Footer
    const footer = indexPage.createFooter();
    main.appendChild(footer);
    
    container.appendChild(main);
    app.appendChild(container);
    
    // Initialize animations
    indexPage.initAnimations();
  },

  createFeaturesSection: () => {
    const section = utils.createElement('section', 'mb-16');
    section.innerHTML = `
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl font-bold mb-4">Why Choose SkillSprout?</h2>
        <p class="text-xl text-muted max-w-2xl mx-auto">
          Our platform combines expert-curated content with intelligent progress tracking 
          to accelerate your learning journey.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center p-6 animate-fade-in delay-100">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-semibold mb-3">Personalized Learning</h3>
          <p class="text-muted">
            Adaptive learning paths that adjust to your pace and learning style for optimal results.
          </p>
        </div>
        
        <div class="text-center p-6 animate-fade-in delay-200">
          <div class="text-4xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-3">Progress Tracking</h3>
          <p class="text-muted">
            Detailed analytics and insights to monitor your learning progress and achievements.
          </p>
        </div>
        
        <div class="text-center p-6 animate-fade-in delay-300">
          <div class="text-4xl mb-4">🎓</div>
          <h3 class="text-xl font-semibold mb-3">Expert Content</h3>
          <p class="text-muted">
            High-quality resources curated by industry professionals and learning experts.
          </p>
        </div>
      </div>
    `;
    return section;
  },

  createStatsSection: () => {
    const section = utils.createElement('section', 'mb-16 text-center');
    section.innerHTML = `
      <div class="bg-gradient-primary rounded-2xl p-8 text-white animate-scale-in">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="text-3xl font-bold mb-2">10K+</div>
            <div class="text-sm opacity-90">Active Learners</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">500+</div>
            <div class="text-sm opacity-90">Learning Resources</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">50+</div>
            <div class="text-sm opacity-90">Skill Categories</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">95%</div>
            <div class="text-sm opacity-90">Success Rate</div>
          </div>
        </div>
      </div>
    `;
    return section;
  },

  createPopularSkillsSection: () => {
    const section = utils.createElement('section', 'mb-16');
    
    const popularSkills = [
      { id: 1, title: 'Web Development', icon: '💻', learners: '2.5K', rating: 4.8 },
      { id: 2, title: 'Data Science', icon: '📊', learners: '1.8K', rating: 4.9 },
      { id: 3, title: 'Digital Marketing', icon: '📈', learners: '1.2K', rating: 4.7 },
      { id: 4, title: 'UI/UX Design', icon: '🎨', learners: '950', rating: 4.8 }
    ];

    section.innerHTML = `
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl font-bold mb-4">Popular Skills</h2>
        <p class="text-xl text-muted">Join thousands of learners mastering these in-demand skills</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${popularSkills.map((skill, index) => `
          <div class="card card-hover p-6 text-center animate-fade-in delay-${(index + 1) * 100}">
            <div class="text-4xl mb-4">${skill.icon}</div>
            <h3 class="font-semibold mb-2">${skill.title}</h3>
            <div class="text-sm text-muted mb-2">${skill.learners} learners</div>
            <div class="flex items-center justify-center gap-1 text-yellow-500">
              <span>⭐</span>
              <span class="text-sm">${skill.rating}</span>
            </div>
            <button class="btn btn-outline w-full mt-4" onclick="router.navigate('/skills')">
              Learn More
            </button>
          </div>
        `).join('')}
      </div>
    `;
    
    return section;
  },

  createCTASection: () => {
    const section = utils.createElement('section', 'mb-16 text-center');
    section.innerHTML = `
      <div class="card p-8 animate-scale-in">
        <h2 class="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p class="text-xl text-muted mb-6 max-w-2xl mx-auto">
          Join our community of learners and start your journey towards mastering new skills today.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="#/signup" class="btn btn-gradient">Create Free Account</a>
          <a href="#/skills" class="btn btn-outline">Browse Skills</a>
        </div>
      </div>
    `;
    return section;
  },

  createFooter: () => {
    const footer = utils.createElement('footer', 'text-center py-8 text-muted');
    footer.innerHTML = `
      <div class="animate-fade-in">
        <p>&copy; 2024 SkillSprout. All rights reserved.</p>
        <div class="flex justify-center gap-6 mt-4 text-sm">
          <a href="#" class="hover:text-primary">Privacy Policy</a>
          <a href="#" class="hover:text-primary">Terms of Service</a>
          <a href="#" class="hover:text-primary">Contact</a>
        </div>
      </div>
    `;
    return footer;
  },

  initAnimations: () => {
    // Initialize animations after a short delay
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-left');
      animatedElements.forEach((el, index) => {
        utils.fadeIn(el, index * 100);
      });
    }, 100);
  }
};