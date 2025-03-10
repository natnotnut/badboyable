// Data for the drama list
const dramas = [
    { title: 'Alchemy of Souls', country: 'South Korea', year: 2022 },
    { title: 'Crash Landing On You', country: 'South Korea', year: 2019 },
    { title: 'Squid Game', country: 'South Korea', year: 2021 },
    { title: 'Money Heist', country: 'Spain', year: 2017 },
    { title: 'Dark', country: 'Germany', year: 2017 }
];

let sortDirection = 1; // 1 for ascending, -1 for descending

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
