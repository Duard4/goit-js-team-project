document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      image: '/img/projects/WALLET-WEBSERVICE.png',
      title: 'WALLET WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/GREEN-HARVEST-WEBSERVICE.png',
      title: 'GREEN HARVEST WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/ENGLISH-EXCELLENCE-WEBSERVICE.png',
      title: 'ENGLISH EXCELLENCE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/POWER-PULSE-WEBSERVICE.png',
      title: 'POWER PULSE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/MIMINO-WEBSITE.png',
      title: 'MIMINO WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/VYSHYVANKA-VIBES-LANDING PAGE.png',
      title: 'VYSHYVANKA VIBES LANDING PAGE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/CHEGO-JEWELRY-WEBSITE.png',
      title: 'CHEGO JEWELRY WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/ENERGY-FLOW-WEBSERVICE.png',
      title: 'ENERGY FLOW WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/FRUITBOX-ONLINE-STORE.png',
      title: 'FRUITBOX ONLINE STORE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      image: '/img/projects/STARLIGHT-STUDIO-LANDING-PAGE.png',
      title: 'STARLIGHT STUDIO LANDING PAGE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
  ];

  let currentIndex = 0;
  const projectsPerPage = 3;
  const projectList = document.querySelector('.project-list');
  const loadMoreBtn = document.querySelector('.load-more');

  function loadProjects() {
    const nextProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);
    nextProjects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.innerHTML = `
              <img src="${project.image}" alt="${project.title}">
              <div class="project-info-box">
                <p>${project.techStack}</p>
                <div class="projects-title-visit-wrapper">
                  <h3>${project.title}</h3>
                  <a href="${project.link}" target="_blank" class="visit-btn">VISIT<svg width="24" height="24">
                  <use href="./img/icons.svg#icon-diagonal-arrow"></use>
                  </svg></a>
                </div>
              </div>
          `;
      projectList.appendChild(projectItem);
    });
    currentIndex += projectsPerPage;
    if (currentIndex >= projects.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreBtn.addEventListener('click', loadProjects);


  loadProjects();
});
