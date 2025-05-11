// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Profile image interaction
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('mouseenter', () => {
    profileImg.style.transform = 'scale(1.1)';
});
profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = '';
});

// Dynamic projects
const projects = [
    {
        title: "Web Portfolio",
        description: "Responsive portfolio website",
        link: "#"
    },
    {
        title: "Video Tutorials",
        description: "Educational content series",
        link: "#"
    }
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});