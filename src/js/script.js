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

document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll-container');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  // Função para verificar o overflow horizontal
  function checkOverflow() {
      const isOverflowing = scrollContainer.scrollWidth > scrollContainer.clientWidth;
      if (isOverflowing) {
          rightArrow.style.display = 'block';
      } else {
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'none';
      }
  }

  // Função para rolar para a esquerda
  function scrollLeft() {
      scrollContainer.scrollBy({
          left: -100, // Ajuste o valor conforme necessário
          behavior: 'smooth'
      });
  }

  // Função para rolar para a direita
  function scrollRight() {
      scrollContainer.scrollBy({
          left: 100, // Ajuste o valor conforme necessário
          behavior: 'smooth'
      });
  }

  // Adiciona os eventos de clique para as setas
  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);

  // Adiciona o evento de rolagem para mostrar/esconder as setas
  scrollContainer.addEventListener('scroll', function() {
      if (scrollContainer.scrollLeft > 0) {
          leftArrow.style.display = 'block';
      } else {
          leftArrow.style.display = 'none';
      }
      if (scrollContainer.scrollWidth - scrollContainer.scrollLeft === scrollContainer.clientWidth) {
          rightArrow.style.display = 'none';
      } else {
          rightArrow.style.display = 'block';
      }
  });

  // Verifica o overflow ao carregar a página
  checkOverflow();
});
