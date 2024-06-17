/*document.addEventListener("DOMContentLoaded", function() {
  const circulos = document.querySelectorAll('.circulo');
  const textos = document.querySelectorAll('.texto');

  circulos.forEach(circulo => {
      circulo.addEventListener('click', () => {
          const idCirculo = circulo.id.replace('circulo-', ''); // Remove o prefixo "circulo-"
          const textoAtivo = document.getElementById(`texto-${idCirculo}`);

          // Remove a classe 'ativo' de todos os textos antes de mostrar o novo
          textos.forEach(t => t.classList.remove('ativo'));

          // Adiciona a classe 'ativo' ao texto correspondente ao círculo clicado
          textoAtivo.classList.add('ativo');
      });
  });
});*/


document.addEventListener("DOMContentLoaded", function() {
  const circulos = document.querySelectorAll('.circulo');
  const textos = document.querySelectorAll('.texto');

  circulos.forEach(circulo => {
      circulo.addEventListener('click', () => {
          const idCirculo = circulo.id.replace('circulo-', ''); // Remove o prefixo "circulo-"

          // Remove a classe "ativo" de todos os círculos
          circulos.forEach(c => c.classList.remove('ativo'));

          // Adiciona a classe "ativo" ao círculo clicado
          circulo.classList.add('ativo');

          // Esconde todos os textos antes de mostrar o novo
          textos.forEach(t => {
              t.classList.remove('ativo');
              t.style.display = 'none';
          });

          // Mostra o texto específico do círculo clicado
          const textoAtivo = document.getElementById(`texto-${idCirculo}`);
          textoAtivo.classList.add('ativo');
          textoAtivo.style.display = 'block';
      });
  });
});












/*IMPORTANTE: INSERIR AQUI APENAS O JAVASCRIPT QUE VAI SER APLICADO A TODAS AS PÁGINA, QUE SÃO A BARRA DE NAVEGAÇÃO E NO FOOTER*/

/* Javascript da barra de navegação*/

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box, index) => {
    if (index % 2 === 1) {
      box.classList.add("right");
    }
  });

  const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", checkBoxes);

  // Run the check once to show boxes already in view on page load
  checkBoxes();
});


//Botão do calendário com alerta de ingresso comprado

document.getElementById("comprar-ingresso").addEventListener("click", function() {
  alert("Ingresso comprado");
});




