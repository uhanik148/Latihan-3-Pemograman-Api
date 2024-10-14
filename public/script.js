fetch('public/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // Menampilkan data di konsol
        const concertsDiv = document.getElementById('concerts');
        data.forEach(concert => {
            const concertElement = document.createElement('p');
            concertElement.textContent = ${concert.artist} - ${concert.location} (${concert.date});
            concertsDiv.appendChild(concertElement);
        });
    })
    .catch(error => console.error('Fetch error:', error));