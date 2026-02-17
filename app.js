// Načtení dat z profile.json
fetch('profile.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Chyba při načítání profile.json');
    }
    return response.json();
  })
  .then(data => {
    // Vložení jména do h1
    document.getElementById('name').textContent = data.name;

    // Vygenerování seznamu dovedností
    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.className = 'skill-item';
      skillsList.appendChild(li);
    });

    // Vygenerování zájmů
    if (data.interests && data.interests.length > 0) {
      const interestsContainer = document.getElementById('interests');
      data.interests.forEach(interest => {
        const div = document.createElement('div');
        div.className = 'interest-item';
        div.textContent = interest;
        interestsContainer.appendChild(div);
      });
    }

    // Vygenerování projektů
    if (data.projects && data.projects.length > 0) {
      const projectsContainer = document.getElementById('projects');
      data.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'Zobrazit →';
        link.className = 'project-link';
        
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(link);
        projectsContainer.appendChild(div);
      });
    }
  })
  .catch(error => {
    console.error('Chyba při načítání dat:', error);
    document.getElementById('name').textContent = 'Chyba při načítání profilu';
  });
