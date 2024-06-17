// script.js
document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');

    const events = [
        { date: '13 Jan 2024', location: 'Diriyah, Saudi Arabia' },
        { date: '27 Jan 2024', location: 'Marrakesh, Morocco' },
        { date: '10 Feb 2024', location: 'Mexico City, Mexico' },
        { date: '24 Feb 2024', location: 'Cape Town, South Africa' },
        { date: '9 Mar 2024', location: 'Santiago, Chile' },
        { date: '23 Mar 2024', location: 'Sao Paulo, Brazil' },
        { date: '13 Apr 2024', location: 'Rome, Italy' },
        { date: '27 Apr 2024', location: 'Paris, France' },
        { date: '11 May 2024', location: 'Monaco' },
        { date: '25 May 2024', location: 'Berlin, Germany' },
        { date: '8 Jun 2024', location: 'Jakarta, Indonesia' },
        { date: '22 Jun 2024', location: 'Vancouver, Canada' },
        { date: '6 Jul 2024', location: 'New York City, USA' },
        { date: '20 Jul 2024', location: 'London, UK' },
        { date: '27 Jul 2024', location: 'Seoul, South Korea' }
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        
        const eventDate = document.createElement('h3');
        eventDate.textContent = event.date;
        
        const eventLocation = document.createElement('p');
        eventLocation.textContent = event.location;

        eventElement.appendChild(eventDate);
        eventElement.appendChild(eventLocation);

        calendar.appendChild(eventElement);
    });
});
