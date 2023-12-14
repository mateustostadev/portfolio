new Vue({
  el: "#app",
  data: {
    aboutMe: {
      name: "Mateus Tosta",
      role: "Desenvolvedor FullStack",
      bio: "Olá! me chamo Mateus Tosta, um desenvolvedor fullstack com uma paixão ardente pela criação de soluções inovadoras e impactantes. Com 24 anos de idade, estou animado em compartilhar minhas competências em PHP, MySQL, JavaScript e Laravel para impulsionar o desenvolvimento de projetos web de alto desempenho.",
      image: "mateus-tosta.jpeg",
    },
    hardSkills: ["PHP", "Laravel", "Vuejs", "Js", "HTML5", "CSS3"],
    experience: "Tenho mais de 5 anos de experiência trabalhando como desenvolvedor FullStack em diversas empresas, onde liderei projetos e contribuí para o desenvolvimento de sistemas robustos e escaláveis.",
    projects: [
      {
        title: "Sistema de Ponto Eletrônico Web",
        description: "Ponto eletrônico com modelo de jornada trabalhista de 8h e 4h, com gerenciamento de horas e sistema de cadastro.",
        image: "imagens/projeto_ponto.png",
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
      {
        title: "Sistema LF Consulta (Intranet)",
        description: "Idealizado e projetado para realizar consultas e criar campanhas direcionadas a clientes chave.",
        image: "imagens/projeto_sistema.png",
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
      {
        title: "API Surf",
        description: "Permite gerenciar competições de surfe, surfistas, baterias, ondas e notas associadas a cada onda.",
        image: "imagens/api_surf.png",
        stack: ["PHP", "Laravel", "MySQL"],
      },
    ],
    animatedSections: {
      showAboutMe: false,
      showHardSkills: false,
      showExperience: false,
      showProjects: false,
    },
  },
  methods: {
    animateOpacity(section, isVisible) {
      anime({
        targets: `#${section}`,
        opacity: isVisible ? 1 : 0,
        easing: 'linear',
        duration: 500,
      });
    },

    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      Object.keys(this.animatedSections).forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const elementPosition = element.offsetTop;
          if (scrollPosition + windowHeight > elementPosition) {
            this.animatedSections[section] = true;
            this.animateOpacity(section, true);
          } else {
            this.animatedSections[section] = false;
            this.animateOpacity(section, false);
          }
        }
      });
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        anime({
          targets: 'html, body',
          scrollTop: element.offsetTop,
          duration: 1000,
          easing: 'easeInOutExpo',
        });
      }
    },
  },
  mounted() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-blurred');
      } else {
        header.classList.remove('header-blurred');
      }
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  template: `
    <div>
      <div class="header animate__animated animate__fadeInDown" :class="{'header-blurred': animatedSections.showHeaderBlurred}">
        <div class="header-left">
          <h1>{{ aboutMe.name }}</h1>
        </div>
        <div class="header-right">
          <a @click="scrollToSection('showAboutMe')">Sobre Mim</a>
          <a @click="scrollToSection('showHardSkills')">Hard Skills</a>
          <a @click="scrollToSection('showExperience')">Experiência</a>
          <a @click="scrollToSection('showProjects')">Projetos</a>
        </div>
      </div>
      <div class="container">
        <div id="showAboutMe" class="section about-me animate__animated" :class="{'animate__fadeIn': animatedSections.showAboutMe}">
          <div class="about-me-content">
            <div class="about-me-description">
              <h2>
                <img src="logo-icone.png" alt="Logo Icon"> Sobre Mim
              </h2>
              <p>{{ aboutMe.bio }}</p>
            </div>
            <div class="about-me-image">
              <img :src="aboutMe.image" alt="Mateus Tosta">
            </div>
          </div>
        </div>
        <div id="showHardSkills" class="section animate__animated" :class="{'animate__fadeIn': animatedSections.showHardSkills}">
          <div class="hard-skills-description">
            <h2>
              <img src="imagens/life-skills.png" alt="Logo Icon"> Hard Skills
            </h2>
          </div>
          <div class="hard-skills-icons">
            <div v-for="(skill, index) in hardSkills" :key="index" class="icon-container">
              <i :class="['fab', 'fa-' + skill.toLowerCase()]" @mouseover="changeColor(skill)" @mouseout="resetColor(skill)"></i>
            </div>
          </div>
        </div>
        <div id="showExperience" class="section animate__animated" :class="{'animate__fadeIn': animatedSections.showExperience}">
          <h2>Experiência</h2>
          <h3>LF Promotora</h3>
          <p>Agosto 2023 - Atualmente</p>
          <ul>
            <li>Gerenciamento de chatbots e discadoras;</li>
            <li>Higienização e tratamento de leads;</li>
            <li>Gerenciamento de banco de dados;</li>
            <li>Desenvolvimento de sistema web integrado com MySQL;</li>
            <li>Integrar o sistema com a API do banco digital Master;</li>
            <li>Criação e integração de um sistema de ponto eletrônico com dupla jornada de trabalho.</li>
          </ul>
        </div>
        <div id="showProjects" class="section animate__animated" :class="{'animate__fadeIn': animatedSections.showProjects}">
          <h2>Projetos</h2>
          <div v-for="project in projects" :key="project.title" class="project-container">
            <div class="project-image">
              <img :src="project.image" alt="Imagem do Projeto">
            </div>
            <div class="project-description">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <p>Stack: {{ project.stack.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="https://github.com/mateustostadev" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mateus-tosta-335908178/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  `,
});
