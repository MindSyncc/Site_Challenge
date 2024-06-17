/*Carrousel de imagens*/


let imagens = [
    "src/assets/img/equipes/cupra/cupra.jpg",
    "src/assets/img/equipes/ds_penske/ds.jpg",
    "src/assets/img/equipes/andretti/andretti.jpeg",
    "src/assets/img/equipes/envision/envision.webp",
    "src/assets/img/equipes/ert/ert-1.jpeg",
    "src/assets/img/equipes/jaguar/jaguar.jpg",
    "src/assets/img/equipes/mahindra/mahindra.webp",
    "src/assets/img/equipes/maserati/maserati.jpeg",
    "src/assets/img/equipes/mclaren/mclaren.png",
    "src/assets/img/equipes/nissan/nissan.jpg",
    "src/assets/img/equipes/porsche/porsche.jpg"
  ]; //ARRAY DE IMAGENS
  let index = 0; //INICIO DA POSIÇÃO 0
  let time = 3000; //TEMPO EM QUE AS IMAGENS VÃO PASSAR 3SEGUNDOS
  
  //FUNÇÃO SLIDESHOW
  function slideShow() {
    //PEGA O ID REFERENCIA NO ARRAY DE IMAGENS E SUA POSIÇÃO QUE É 0
    document.getElementById("imgBanner").src = imagens[index];
    index++; //INCREMENTO EM CADA IMAGEM DENTRO DO ARRAY
  
    //SE O INDEX ESTIVER COM COM A CONTAGEM DE IMAGENS CERTAS
    if (index == imagens.length) {
      index = 0; //VOLTA PARA A POSIÇÃO 0
    }
    //função que define regras de tempo
    setTimeout("slideShow()", time);
  }
  //executando a função
  slideShow();


  /* Botão do pop-up com informações das equipes*/
  document.addEventListener('DOMContentLoaded', (event) => {
    // Obtém os elementos
    var popup = document.getElementById('popup');
    var openPopupBtn = document.getElementById('openPopupBtn');
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    // Abre o pop-up ao clicar no botão
    openPopupBtn.onclick = function() {
      popup.style.display = 'flex';
    }

    // Fecha o pop-up ao clicar no botão de fechar
    closeBtn.onclick = function() {
      popup.style.display = 'none';
    }

    // Fecha o pop-up ao clicar fora do conteúdo do pop-up
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    }
  });


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
