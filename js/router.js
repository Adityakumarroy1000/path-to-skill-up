// Simple router implementation
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.init();
  }

  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, params] = hash.split('?');
    
    // Parse URL parameters
    const urlParams = new URLSearchParams(params);
    const routeParams = {};
    for (const [key, value] of urlParams) {
      routeParams[key] = value;
    }

    // Handle parameterized routes (e.g., /skill/:id)
    let handler = this.routes[path];
    let routeData = { params: routeParams };

    if (!handler) {
      // Check for dynamic routes
      for (const route in this.routes) {
        if (route.includes(':')) {
          const routeParts = route.split('/');
          const pathParts = path.split('/');
          
          if (routeParts.length === pathParts.length) {
            let isMatch = true;
            const dynamicParams = {};
            
            for (let i = 0; i < routeParts.length; i++) {
              if (routeParts[i].startsWith(':')) {
                dynamicParams[routeParts[i].slice(1)] = pathParts[i];
              } else if (routeParts[i] !== pathParts[i]) {
                isMatch = false;
                break;
              }
            }
            
            if (isMatch) {
              handler = this.routes[route];
              routeData.params = { ...routeParams, ...dynamicParams };
              break;
            }
          }
        }
      }
    }

    // If no route found, show 404
    if (!handler) {
      handler = this.routes['/404'] || this.routes['*'];
    }

    if (handler) {
      this.currentRoute = path;
      this.clearPage();
      handler(routeData);
    }
  }

  clearPage() {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = '';
    }
  }

  navigate(path) {
    window.location.hash = path;
  }

  goBack() {
    window.history.back();
  }
}

// Create global router instance
const router = new Router();