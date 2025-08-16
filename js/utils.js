// Utility functions
const utils = {
  // DOM helpers
  createElement: (tag, className = '', innerHTML = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  },

  // Local storage helpers
  getFromStorage: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return localStorage.getItem(key);
    }
  },

  setToStorage: (key, value) => {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  },

  removeFromStorage: (key) => {
    localStorage.removeItem(key);
  },

  // Theme helpers
  getTheme: () => {
    return localStorage.getItem('theme') || 'light';
  },

  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  },

  toggleTheme: () => {
    const currentTheme = utils.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    utils.setTheme(newTheme);
    return newTheme;
  },

  // Animation helpers
  fadeIn: (element, delay = 0) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  },

  // Form validation
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  validatePassword: (password) => {
    return password.length >= 6;
  },

  // Loading state
  showLoading: (button, text = 'Loading...') => {
    button.disabled = true;
    button.innerHTML = `
      <div class="flex items-center space-x-2">
        <div style="width: 16px; height: 16px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <span>${text}</span>
      </div>
    `;
  },

  hideLoading: (button, originalText) => {
    button.disabled = false;
    button.innerHTML = originalText;
  },

  // Toast notifications
  showToast: (message, type = 'success') => {
    const toast = utils.createElement('div', `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`, message);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  },

  // Format time
  formatTimeAgo: (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  },

  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// Add spinner keyframes to head
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);