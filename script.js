document.addEventListener('DOMContentLoaded', () => {
  const data = {
    stadiums: [
      { name: 'Allianz Arena', location: 'Munich', club: 'Bayern Munich', year: 2023, match: 'Bundesliga Match', img: '2022_09_11_21_23_IMG_5657.JPG' },
      { name: 'Signal Iduna Park', location: 'Dortmund', club: 'Borussia Dortmund', year: 2023, match: 'Bundesliga Match', img: 'images/signal_iduna_park.jpg' },
      { name: 'Red Bull Arena', location: 'Leipzig', club: 'RB Leipzig', year: 2023, match: 'Bundesliga Match', img: 'images/red_bull_arena.jpg' },
      { name: 'Mercedes-Benz Arena', location: 'Stuttgart', club: 'VfB Stuttgart', year: 2023, match: 'Bundesliga Match', img: 'images/mercedes_benz_arena.jpg' },
      { name: 'Olympiastadion', location: 'Berlin', club: 'Hertha Berlin', year: 2023, match: 'Bundesliga Match', img: 'images/olympiastadion.jpg' },
      { name: 'Volksparkstadion', location: 'Hamburg', club: 'Hamburger SV', year: 2023, match: 'Bundesliga Match', img: 'images/volksparkstadion.jpg' },
      // Add more German First Division stadiums as needed
    ],
    countries: [
      'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 
      'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 
      'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Kazakhstan', 'Kosovo', 'Latvia', 'Liechtenstein', 
      'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 
      'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 
      'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'
    ],
    years: [2023, 2022, 2021, 2020],
    matches: ['Bundesliga Match', 'Champions League Match', 'Friendly Match']
  };

  const countrySelect = document.getElementById('countrySelect');
  const stadiumSelect = document.getElementById('stadiumSelect');
  const yearSelect = document.getElementById('yearSelect');
  const matchSelect = document.getElementById('matchSelect');

  function populateDropdown(selectElement, items) {
    items.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name || item;
      option.textContent = item.name || item;
      selectElement.appendChild(option);
    });
  }

  // Populate dropdowns
  populateDropdown(countrySelect, data.countries);
  populateDropdown(stadiumSelect, data.stadiums.map(s => s.name));
  populateDropdown(yearSelect, data.years);
  populateDropdown(matchSelect, data.matches);

  function filterContent() {
    const selectedCountry = countrySelect.value;
    const selectedStadium = stadiumSelect.value;
    const selectedYear = yearSelect.value;
    const selectedMatch = matchSelect.value;

    const filteredData = data.stadiums.filter(stadium =>
      (selectedCountry === 'all' || stadium.location === selectedCountry) &&
      (selectedStadium === 'all' || stadium.name === selectedStadium) &&
      (selectedYear === 'all' || stadium.year === parseInt(selectedYear)) &&
      (selectedMatch === 'all' || stadium.match === selectedMatch)
    );

    displayContent(filteredData);
  }

  function displayContent(items) {
    const contentGrid = document.getElementById('contentGrid');
    contentGrid.innerHTML = items.map(item => `
      <div class="card">
        <img src="${item.img}" alt="${item.name}" style="width:100%; height:auto;">
        <h3>${item.name}</h3>
        <p>${item.location} - ${item.year}</p>
        <p>Match: ${item.match}</p>
      </div>
    `).join('');
  }

  filterContent();
});
