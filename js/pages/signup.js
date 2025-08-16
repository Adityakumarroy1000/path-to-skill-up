// Signup page implementation
const signupPage = {
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
              <h2 class="text-2xl font-bold mb-2">Create your account</h2>
              <p class="text-muted">Join thousands of learners on SkillSprout</p>
            </div>
            
            <form id="signup-form" class="space-y-4">
              <div class="space-y-2">
                <label for="name" class="text-sm font-medium">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  class="input"
                  required
                />
              </div>
              
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
                    placeholder="Create a password"
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
              
              <div class="space-y-2">
                <label for="confirmPassword" class="text-sm font-medium">Confirm Password</label>
                <div class="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    class="input pr-10"
                    required
                  />
                  <button
                    type="button"
                    id="toggle-confirm-password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted"
                  >
                    👁️
                  </button>
                </div>
              </div>
              
              <button 
                type="submit" 
                id="signup-btn"
                class="btn btn-gradient w-full"
              >
                Create Account
              </button>
            </form>
            
            <div class="mt-6 text-center text-sm">
              <span class="text-muted">Already have an account? </span>
              <a href="#/login" class="text-primary hover:underline">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    app.appendChild(container);
    
    // Initialize interactions
    signupPage.initInteractions();
    signupPage.initAnimations();
  },

  initInteractions: () => {
    // Form submission
    const form = document.getElementById('signup-form');
    const signupBtn = document.getElementById('signup-btn');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');
      
      // Validation
      if (!name.trim()) {
        utils.showToast('Please enter your full name', 'error');
        return;
      }
      
      if (!utils.validateEmail(email)) {
        utils.showToast('Please enter a valid email address', 'error');
        return;
      }
      
      if (!utils.validatePassword(password)) {
        utils.showToast('Password must be at least 6 characters long', 'error');
        return;
      }
      
      if (password !== confirmPassword) {
        utils.showToast("Passwords don't match!", 'error');
        return;
      }
      
      // Simulate signup
      utils.showLoading(signupBtn, 'Creating account...');
      
      setTimeout(() => {
        utils.setToStorage('isLoggedIn', 'true');
        utils.setToStorage('userEmail', email);
        utils.setToStorage('userName', name);
        
        utils.hideLoading(signupBtn, 'Create Account');
        utils.showToast('Account created successfully!');
        
        router.navigate('/profile-setup');
      }, 1000);
    });

    // Password toggles
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    toggleConfirmPassword.addEventListener('click', () => {
      const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
      confirmPasswordInput.type = type;
      toggleConfirmPassword.textContent = type === 'password' ? '👁️' : '🙈';
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