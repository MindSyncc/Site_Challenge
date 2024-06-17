const cars = [
    { image: 'src/assets/img/home/secao/piloto1.png', infoImage: 'src/assets/img/home/secao/info1.png' },
    { image: 'src/assets/img/home/secao/piloto2.png', infoImage: 'src/assets/img/home/secao/info2.png' },
    { image: 'src/assets/img/home/secao/piloto3.png', infoImage: 'src/assets/img/home/secao/info3.png' },
    { image: 'src/assets/img/home/secao/piloto4.png', infoImage: 'src/assets/img/home/secao/info4.png' },
    { image: 'src/assets/img/home/secao/piloto5.png', infoImage: 'src/assets/img/home/secao/info5.png' },
    { image: 'src/assets/img/home/secao/piloto6.png', infoImage: 'src/assets/img/home/secao/info6.png' }
];


let currentCarIndex = 0;

// Função para atualizar a imagem do piloto e suas informações
function updateCarImage() {
    const carImage = document.getElementById('carImage');
    carImage.src = cars[currentCarIndex].image;
    carImage.onload = () => {
        carImage.classList.add('loaded');
    };

    const pilotInfoImage = document.getElementById('pilotInfoImage');
    pilotInfoImage.src = cars[currentCarIndex].infoImage;

    const pilotInfoContent = document.getElementById('pilotInfoContent');
    pilotInfoContent.textContent = cars[currentCarIndex].info;
}

// Chamada inicial para carregar a primeira imagem e informações
updateCarImage();

// Função para avançar para o próximo piloto
function nextCar() {
    currentCarIndex = (currentCarIndex + 1) % cars.length;
    updateCarImage();
}

// Função para voltar para o piloto anterior
function previousCar() {
    currentCarIndex = (currentCarIndex - 1 + cars.length) % cars.length;
    updateCarImage();
}

// Função para mostrar informações do piloto
function showPilotInfo() {
    const pilotInfo = document.getElementById('pilotInfo');
    pilotInfo.classList.toggle('show');
}

// Função para rolar a página para o topo
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE, Firefox, Chrome, etc.
}