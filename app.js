new Vue({
    el: "#app",
    data: {
      aboutMe: {
        name: "Mateus Tosta",
        role: "Desenvolvedor FullStack",
        bio: "Olá! me chamo Mateus Tosta, um desenvolvedor backend com uma paixão ardente pela criação de soluções inovadoras e impactantes. Com 24 anos de idade, estou animado em compartilhar minhas competências em PHP, MySQL, JavaScript e Laravel para impulsionar o desenvolvimento de projetos web de alto desempenho.",
        image: "mateus-tosta.jpeg", // Insira o nome do arquivo da sua imagem
      },
      hardSkills: ["PHP", "Laravel",  "Vuejs", "Js", "HTML5", "CSS3"],
      experience: "Tenho mais de 5 anos de experiência trabalhando como desenvolvedor FullStack em diversas empresas, onde liderei projetos e contribuí para o desenvolvimento de sistemas robustos e escaláveis.",
      projects: [
        {
          title: "Projeto 1",
          description: "Descrição do Projeto 1.",
          stack: ["PHP", "Laravel", "JavaScript"],
        },
        {
          title: "Projeto 2",
          description: "Descrição do Projeto 2.",
          stack: ["PHP", "Laravel", "JavaScript"],
        },
        // Adicione mais projetos conforme necessário
      ],
      animatedSections: {
        showAboutMe: false,
        showHardSkills: false,
        showExperience: false,
        showProjects: false,
      },
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        Object.keys(this.animatedSections).forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const elementPosition = element.offsetTop;
            if (scrollPosition + windowHeight > elementPosition) {
              this.animatedSections[section] = true;
            } else {
              this.animatedSections[section] = false;
            }
          }
        });
      },
      scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      },
    },
    mounted() {
        // Adiciona o código JavaScript para o efeito de desfoque no header
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            header.classList.add('header-blurred');
          } else {
            header.classList.remove('header-blurred');
          }
        });
      },
      destroyed() {
        // Remove o evento de rolagem ao destruir o componente
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
        <div
        id="showAboutMe"
        class="section about-me animate__animated animate__fadeIn"
      >
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
      <div
      id="showHardSkills"
      class="section animate__animated"
      :class="{'animate__fadeIn': animatedSections.showHardSkills}"
    >
      <h2>Hard Skills</h2>
      <div class="hard-skills-icons">
        <div v-for="(skill, index) in hardSkills" :key="index" class="icon-container">
          <i :class="['fab', 'fa-' + skill.toLowerCase()]" @mouseover="changeColor(skill)" @mouseout="resetColor(skill)"></i>
        </div>
      </div>
    </div>
          <div
            id="showExperience"
            class="section animate__animated"
            :class="{'animate__fadeIn': animatedSections.showExperience}"
          >
            <h2>Experiência</h2>
            <p>{{ experience }}</p>
          </div>
          <div
            id="showProjects"
            class="section animate__animated"
            :class="{'animate__fadeIn': animatedSections.showProjects}"
          >
            <h2>Projetos</h2>
            <div v-for="project in projects" class="portfolio-item animate__animated animate__fadeIn">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <p>Stack: {{ project.stack.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  });