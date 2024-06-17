document.addEventListener('DOMContentLoaded', () => {
    const startRaceButton = document.getElementById('startRace');
    const resultsDiv = document.getElementById('results');

    startRaceButton.addEventListener('click', startRace);

    const carElements = {
        car1: document.getElementById('car1'),
        car2: document.getElementById('car2'),
        car3: document.getElementById('car3')
    };

    function startRace() {
        resetCars();
        const raceResults = [];
        for (const carId in carElements) {
            const car = carElements[carId];
            const raceTime = Math.random() * 3000 + 2000; // Random time between 2-5 seconds
            raceResults.push({ carId, raceTime });
            moveCar(car, raceTime);
        }
        raceResults.sort((a, b) => a.raceTime - b.raceTime);
        showResults(raceResults);
    }

    function resetCars() {
        for (const carId in carElements) {
            carElements[carId].style.left = '0px';
        }
        resultsDiv.innerHTML = '';
    }

    function moveCar(car, time) {
        setTimeout(() => {
            car.style.left = 'calc(100% - 50px)'; // Move car to the end of the track
        }, time);
    }

    function showResults(results) {
        setTimeout(() => {
            resultsDiv.innerHTML = '<h2>Resultados:</h2>';
            results.forEach((result, index) => {
                resultsDiv.innerHTML += `<p>${index + 1}. ${result.carId.replace('car', 'Carro ')} - Tempo: ${(result.raceTime / 1000).toFixed(2)}s</p>`;
            });
        }, 5000); // Delay to show results after race ends
    }

    const corredores = document.querySelectorAll('.corredor');
    corredores.forEach(corredor => {
        corredor.addEventListener('click', () => {
            alert(`Dados do ${corredor.querySelector('h3').innerText}`);
        });
    });
});
