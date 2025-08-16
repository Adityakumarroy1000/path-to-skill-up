// Profile setup page implementation
const profileSetupPage = {
  render: () => {
    const app = document.getElementById('app');
    
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main flex items-center justify-center px-4');
    container.innerHTML = `
      <div class="w-full max-w-2xl">
        <div class="text-center mb-8 animate-fade-in">
          <div class="inline-flex items-center space-x-3 mb-4">
            <div class="text-3xl">🌱</div>
            <h1 class="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillSprout
            </h1>
          </div>
          <p class="text-muted">Almost there! Let's set up your profile</p>
        </div>
        
        <div class="card shadow-xl bg-white/90 backdrop-blur-sm animate-scale-in delay-200">
          <div class="p-6">
            <div class="text-center pb-6">
              <h2 class="text-2xl font-bold mb-2">Complete Your Profile</h2>
              <p class="text-muted">Tell us a bit about yourself to personalize your learning experience</p>
            </div>
            
            <form id="profile-form" class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="firstName" class="text-sm font-medium">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="Enter your first name" class="input" required>
                </div>
                <div class="space-y-2">
                  <label for="lastName" class="text-sm font-medium">Last Name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Enter your last name" class="input" required>
                </div>
              </div>
              
              <div class="space-y-2">
                <label for="occupation" class="text-sm font-medium">Occupation</label>
                <input id="occupation" name="occupation" type="text" placeholder="e.g. Student, Developer, Designer" class="input">
              </div>

              <div class="space-y-2">
                <label for="bio" class="text-sm font-medium">Bio (Optional)</label>
                <input id="bio" name="bio" type="text" placeholder="Tell us a bit about yourself" class="input">
              </div>

              <button type="submit" id="setup-btn" class="btn btn-gradient w-full">
                Complete Setup
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
    
    app.appendChild(container);
    profileSetupPage.initInteractions();
    profileSetupPage.initAnimations();
  },

  initInteractions: () => {
    const form = document.getElementById('profile-form');
    const setupBtn = document.getElementById('setup-btn');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      
      utils.showLoading(setupBtn, 'Setting up profile...');
      
      setTimeout(() => {
        utils.setToStorage('userProfile', {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          occupation: formData.get('occupation'),
          bio: formData.get('bio')
        });
        utils.setToStorage('profileCompleted', 'true');
        
        utils.hideLoading(setupBtn, 'Complete Setup');
        utils.showToast('Profile setup completed!');
        router.navigate('/dashboard');
      }, 1000);
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