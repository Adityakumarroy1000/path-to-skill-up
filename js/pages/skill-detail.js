const skillDetailPage = {
  render: (skillId) => {
    const app = document.getElementById('app');
    const container = utils.createElement('div', 'min-h-screen bg-gradient-main');
    container.innerHTML = `<div class="text-center py-8"><h1 class="text-3xl font-bold">Skill Detail ${skillId}</h1><button onclick="router.navigate('/skills')" class="btn btn-primary mt-4">Back to Skills</button></div>`;
    app.appendChild(container);
  }
};