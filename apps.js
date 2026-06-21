const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const projectsGrid = document.getElementById("projectsGrid");

const projects = [
  {
    title: "Swim Tracker",
    description: "Web application designed to plan and log swimming training sessions.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    demo: "https://tortoriello-ignacio.github.io/Proyecto_natacion/",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description: "Responsive web portfolio featuring top navigation, CV-style sections, and dynamic project displays.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Manager",
    description: "Kanban-style application built to organize tasks, track statuses, and manage priorities.",
    tags: ["JavaScript", "DOM", "CRUD"],
    demo: "#",
    github: "#",
  },
];

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("article");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <h3>${project.title}</h3>

      <p>${project.description}</p>

      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>

      <div class="project-links">
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">Código</a>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

function setActiveLink() {
  let currentSectionId = "inicio";
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

renderProjects();
setActiveLink();
