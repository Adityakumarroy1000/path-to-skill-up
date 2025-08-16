// Main application initialization
class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize theme
    const savedTheme = utils.getTheme();
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Register routes
    this.registerRoutes();

    // Handle initial load
    if (!window.location.hash) {
      window.location.hash = '/';
    }
  }

  registerRoutes() {
    // Home page
    router.addRoute('/', () => {
      indexPage.render();
    });

    // Skills page
    router.addRoute('/skills', () => {
      if (typeof skillsPage !== 'undefined') {
        skillsPage.render();
      } else {
        this.loadPageScript('skills', () => skillsPage.render());
      }
    });

    // Login page
    router.addRoute('/login', () => {
      if (typeof loginPage !== 'undefined') {
        loginPage.render();
      } else {
        this.loadPageScript('login', () => loginPage.render());
      }
    });

    // Signup page
    router.addRoute('/signup', () => {
      if (typeof signupPage !== 'undefined') {
        signupPage.render();
      } else {
        this.loadPageScript('signup', () => signupPage.render());
      }
    });

    // Profile setup page
    router.addRoute('/profile-setup', () => {
      if (typeof profileSetupPage !== 'undefined') {
        profileSetupPage.render();
      } else {
        this.loadPageScript('profile-setup', () => profileSetupPage.render());
      }
    });

    // Dashboard page
    router.addRoute('/dashboard', () => {
      if (!utils.getFromStorage('isLoggedIn')) {
        router.navigate('/login');
        return;
      }
      if (typeof dashboardPage !== 'undefined') {
        dashboardPage.render();
      } else {
        this.loadPageScript('dashboard', () => dashboardPage.render());
      }
    });

    // Skill detail page
    router.addRoute('/skill/:id', (data) => {
      if (typeof skillDetailPage !== 'undefined') {
        skillDetailPage.render(data.params.id);
      } else {
        this.loadPageScript('skill-detail', () => skillDetailPage.render(data.params.id));
      }
    });

    // 404 page
    router.addRoute('/404', () => {
      if (typeof notFoundPage !== 'undefined') {
        notFoundPage.render();
      } else {
        this.loadPageScript('not-found', () => notFoundPage.render());
      }
    });

    // Catch all route
    router.addRoute('*', () => {
      router.navigate('/404');
    });
  }

  loadPageScript(pageName, callback) {
    // Check if script is already loaded
    if (document.querySelector(`script[src="js/pages/${pageName}.js"]`)) {
      callback();
      return;
    }

    const script = document.createElement('script');
    script.src = `js/pages/${pageName}.js`;
    script.onload = callback;
    script.onerror = () => {
      console.error(`Failed to load page: ${pageName}`);
      router.navigate('/404');
    };
    document.head.appendChild(script);
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});