// Skills page implementation
const skillsPage = {
  skills: [
    {
      id: 1,
      title: "Web Development",
      description: "Learn to build modern websites and web applications",
      icon: "💻",
      difficulty: "Beginner",
      resources: 25,
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Technology"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master data analysis, machine learning, and statistics",
      icon: "📊",
      difficulty: "Intermediate",
      resources: 30,
      tags: ["Python", "Statistics", "ML"],
      category: "Technology"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Learn modern marketing strategies and tools",
      icon: "📈",
      difficulty: "Beginner",
      resources: 20,
      tags: ["SEO", "Social Media", "Analytics"],
      category: "Business"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly interfaces",
      icon: "🎨",
      difficulty: "Intermediate",
      resources: 22,
      tags: ["Design", "Figma", "Research"],
      category: "Design"
    },
    {
      id: 5,
      title: "Project Management",
      description: "Lead teams and deliver projects successfully",
      icon: "📋",
      difficulty: "Intermediate",
      resources: 18,
      tags: ["Agile", "Scrum", "Leadership"],
      category: "Business"
    },
    {
      id: 6,
      title: "Mobile Development",
      description: "Build apps for iOS and Android platforms",
      icon: "📱",
      difficulty: "Advanced",
      resources: 28,
      tags: ["React Native", "Flutter", "Swift"],
      category: "Technology"
    }
  ],

  render: () => {
    const app = document.getElementById('app');
    
    // Create main container
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main');
    
    // Add navigation
    const nav = components.createNavigation('skills');
    container.appendChild(nav);
    
    // Main content
    const main = utils.createElement('main', 'max-w-7xl mx-auto px-8 py-8');
    
    // Header section
    const header = skillsPage.createHeader();
    main.appendChild(header);
    
    // Filters section
    const filters = skillsPage.createFilters();
    main.appendChild(filters);
    
    // Skills grid
    const skillsGrid = skillsPage.createSkillsGrid();
    main.appendChild(skillsGrid);
    
    container.appendChild(main);
    app.appendChild(container);
    
    // Initialize interactions
    skillsPage.initInteractions();
    skillsPage.initAnimations();
  },

  createHeader: () => {
    const header = utils.createElement('section', 'text-center mb-12');
    header.innerHTML = `
      <div class="animate-fade-in">
        <h1 class="text-4xl font-bold mb-4">Explore Skills</h1>
        <p class="text-xl text-muted max-w-2xl mx-auto">
          Discover curated learning paths designed to help you master new skills 
          and advance your career.
        </p>
      </div>
    `;
    return header;
  },

  createFilters: () => {
    const filters = utils.createElement('section', 'mb-8');
    filters.innerHTML = `
      <div class="flex flex-wrap gap-4 justify-center animate-fade-in delay-200">
        <button class="btn btn-primary filter-btn active" data-category="all">All Skills</button>
        <button class="btn btn-outline filter-btn" data-category="Technology">Technology</button>
        <button class="btn btn-outline filter-btn" data-category="Business">Business</button>
        <button class="btn btn-outline filter-btn" data-category="Design">Design</button>
      </div>
      
      <div class="mt-6 flex justify-center animate-fade-in delay-300">
        <div class="relative max-w-md w-full">
          <input 
            type="text" 
            id="search-input" 
            class="input pl-10" 
            placeholder="Search skills..."
          >
          <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted">
            🔍
          </div>
        </div>
      </div>
    `;
    return filters;
  },

  createSkillsGrid: () => {
    const grid = utils.createElement('section', 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-400');
    grid.id = 'skills-grid';
    
    skillsPage.renderSkills(skillsPage.skills);
    return grid;
  },

  renderSkills: (skills) => {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    skills.forEach((skill, index) => {
      const skillCard = components.createSkillCard(skill);
      skillCard.style.animationDelay = `${index * 100}ms`;
      grid.appendChild(skillCard);
    });
  },

  filterSkills: (category) => {
    const filteredSkills = category === 'all' 
      ? skillsPage.skills 
      : skillsPage.skills.filter(skill => skill.category === category);
    
    skillsPage.renderSkills(filteredSkills);
  },

  searchSkills: utils.debounce((query) => {
    const filteredSkills = skillsPage.skills.filter(skill => 
      skill.title.toLowerCase().includes(query.toLowerCase()) ||
      skill.description.toLowerCase().includes(query.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    skillsPage.renderSkills(filteredSkills);
  }, 300),

  initInteractions: () => {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => {
          b.classList.remove('btn-primary', 'active');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary', 'active');
        
        // Filter skills
        const category = btn.dataset.category;
        skillsPage.filterSkills(category);
      });
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        skillsPage.searchSkills(e.target.value);
      });
    }

    // Skill card buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('skill-btn')) {
        const skillId = e.target.dataset.skillId;
        router.navigate(`/skill/${skillId}`);
      }
    });
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