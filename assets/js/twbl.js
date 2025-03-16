const itemsPerPage = 10;
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
