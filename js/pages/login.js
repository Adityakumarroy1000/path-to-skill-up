// Login page implementation
const loginPage = {
  render: () => {
    const app = document.getElementById('app');
    
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main flex items-center justify-center px-4');
    
    container.innerHTML = `
      <div class="w-full max-w-md">
        <div class="text-center mb-8 animate-fade-in">
          <a href="#/" class="inline-flex items-center space-x-3 group">
            <div class="text-3xl transition-transform group-hover:scale-110">🌱</div>
            <h1 class="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillSprout
            </h1>
          </a>
        </div>
        
        <div class="card shadow-xl bg-white/90 backdrop-blur-sm animate-scale-in delay-200">
          <div class="p-6">
            <div class="text-center pb-6">
              <h2 class="text-2xl font-bold mb-2">Welcome back</h2>
              <p class="text-muted">Sign in to continue your learning journey</p>
            </div>
            
            <form id="login-form" class="space-y-4">
              <div class="space-y-2">
                <label for="email" class="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  class="input"
                  required
                />
              </div>
              
              <div class="space-y-2">
                <label for="password" class="text-sm font-medium">Password</label>
                <div class="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    class="input pr-10"
                    required
                  />
                  <button
                    type="button"
                    id="toggle-password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted"
                  >
                    👁️
                  </button>
                </div>
              </div>
              
              <button 
                type="submit" 
                id="login-btn"
                class="btn btn-gradient w-full"
              >
                Sign In
              </button>
            </form>
            
            <div class="mt-6 text-center text-sm">
              <span class="text-muted">Don't have an account? </span>
              <a href="#/signup" class="text-primary hover:underline">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    app.appendChild(container);
    
    // Initialize interactions
    loginPage.initInteractions();
    loginPage.initAnimations();
  },

  initInteractions: () => {
    // Form submission
    const form = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const email = formData.get('email');
      const password = formData.get('password');
      
      if (!utils.validateEmail(email)) {
        utils.showToast('Please enter a valid email address', 'error');
        return;
      }
      
      if (!utils.validatePassword(password)) {
        utils.showToast('Password must be at least 6 characters long', 'error');
        return;
      }
      
      // Simulate login
      utils.showLoading(loginBtn, 'Signing in...');
      
      setTimeout(() => {
        utils.setToStorage('isLoggedIn', 'true');
        utils.setToStorage('userEmail', email);
        utils.setToStorage('userName', email.split('@')[0]);
        
        utils.hideLoading(loginBtn, 'Sign In');
        utils.showToast('Successfully signed in!');
        
        // Redirect based on profile completion
        const profileCompleted = utils.getFromStorage('profileCompleted');
        if (profileCompleted) {
          router.navigate('/dashboard');
        } else {
          router.navigate('/profile-setup');
        }
      }, 1000);
    });

    // Password toggle
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });
  },

  initAnimations: () => {
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-scale-in');
      animatedElements.forEach((el, index) => {
        utils.fadeIn(el, index * 100);
      });
    }, 100);
  }
};