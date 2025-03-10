// Improved Version of the Drama List Table Code

// Data for the drama list
const dramas = [
    { title: 'Alchemy of Souls', country: 'South Korea', year: 2022 },
    { title: 'Crash Landing On You', country: 'South Korea', year: 2019 },
    { title: 'Squid Game', country: 'South Korea', year: 2021 },
    { title: 'Money Heist', country: 'Spain', year: 2017 },
    { title: 'Dark', country: 'Germany', year: 2017 }
];

// Function to generate the table content
function generateTable() {
    const tableBody = document.getElementById('cTableBody');
    tableBody.innerHTML = '';

    dramas.forEach(drama => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${drama.title}</td>
            <td>${drama.country}</td>
            <td>${drama.year}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to sort the table by column index
function sortCTable(columnIndex) {
    const direction = dramas._sortDirection || 1; // Default to ascending
    dramas.sort((a, b) => {
        const values = [Object.values(a)[columnIndex], Object.values(b)[columnIndex]];
        return (values[0] > values[1] ? 1 : -1) * direction;
    });

    dramas._sortDirection = -direction; // Toggle sorting direction
    generateTable();
}

// Generate the table on page load
window.onload = generateTable;
