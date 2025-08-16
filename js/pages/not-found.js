const notFoundPage = {
  render: () => {
    const app = document.getElementById('app');
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main flex items-center justify-center');
    container.innerHTML = `<div class="text-center"><h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1><p class="text-muted mb-4">The page you're looking for doesn't exist.</p><button onclick="router.navigate('/')" class="btn btn-primary">Go Home</button></div>`;
    app.appendChild(container);
  }
};