const statesData = {
    'SP': ['São Paulo', 'Campinas', 'Guarulhos'],
    'RJ': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
    'MG': ['Belo Horizonte', 'Uberlândia', 'Contagem'],

};

function searchCities() {
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');
    const rightPane = document.getElementById('right-pane');
    
    resultsDiv.innerHTML = '';
    
    const searchQuery = searchInput.value.toUpperCase();

    if (statesData.hasOwnProperty(searchQuery)) {
        const cities = statesData[searchQuery];
     
        cities.forEach(city => {
            const cityElement = document.createElement('p');
            cityElement.textContent = city;
            resultsDiv.appendChild(cityElement);
        });
       
        rightPane.style.display = 'block';
    } else {
        rightPane.style.display = 'none';
    }
}