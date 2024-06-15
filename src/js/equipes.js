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