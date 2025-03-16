// Data for the drama list
const dramas = [
    { title: 'Alchemy of Souls', country: 'South Korea', year: 2022 },
    { title: 'Crash Landing On You', country: 'South Korea', year: 2019 },
    { title: 'Squid Game', country: 'South Korea', year: 2021 },
    { title: 'Money Heist', country: 'Spain', year: 2017 },
    { title: 'Dark', country: 'Germany', year: 2017 },
    { title: 'Kingdom', country: 'South Korea', year: 2019 },
    { title: 'The Glory', country: 'South Korea', year: 2022 },
    { title: 'My Name', country: 'South Korea', year: 2021 },
    { title: 'Elite', country: 'Spain', year: 2018 },
    { title: 'Stranger', country: 'South Korea', year: 2017 },
    { title: 'Sky Castle', country: 'South Korea', year: 2018 },
    { title: 'Healer', country: 'South Korea', year: 2014 },
    { title: 'Vincenzo', country: 'South Korea', year: 2021 },
    { title: 'Signal', country: 'South Korea', year: 2016 },
    { title: 'Hospital Playlist', country: 'South Korea', year: 2020 },
    { title: 'Itaewon Class', country: 'South Korea', year: 2020 },
    { title: 'Mr. Sunshine', country: 'South Korea', year: 2018 },
    { title: 'Sweet Home', country: 'South Korea', year: 2020 },
    { title: 'Alice in Borderland', country: 'Japan', year: 2020 },
    { title: 'The Penthouse', country: 'South Korea', year: 2020 },
    { title: 'Flower of Evil', country: 'South Korea', year: 2020 },
    { title: 'Hometown Cha-Cha-Cha', country: 'South Korea', year: 2021 },
    { title: 'Move to Heaven', country: 'South Korea', year: 2021 },
    { title: 'Ratched', country: 'United States', year: 2020 },
    { title: 'The Witcher', country: 'United States', year: 2019 }
];

let sortDirection = 1; // 1 for ascending, -1 for descending
const itemsPerPage = 100;
let currentPage = 1;

// Function to generate the table content with pagination
function generateTable() {
    const tableBody = document.getElementById('cTableBody');
    tableBody.innerHTML = '';

    // Calculate start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, dramas.length);

    for (let i = startIndex; i < endIndex; i++) {
        const drama = dramas[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${drama.title}</td>
            <td>${drama.country}</td>
            <td>${drama.year}</td>
        `;
        tableBody.appendChild(row);
    }

    generatePagination();
}

// Function to generate pagination buttons
function generatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(dramas.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            currentPage = i;
            generateTable();
        });

        pagination.appendChild(button);
    }
}

// Function to sort the table by column index
function sortCTable(columnIndex) {
    dramas.sort((a, b) => {
        const values = [Object.values(a)[columnIndex], Object.values(b)[columnIndex]];

        if (typeof values[0] === 'string') {
            return values[0].localeCompare(values[1]) * sortDirection;
        }
        
        return (values[0] - values[1]) * sortDirection;
    });

    sortDirection *= -1; // Toggle sorting direction
    generateTable();
}


window.onload = generateTable;

