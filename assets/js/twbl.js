// Data for the drama list
const dramas = [
    { title: '#Alive', country: 'South Korea', year: 2020, type: 'Movie' },
    { title: '100 Days My Prince', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: '12.12: The Day', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: '18 Again', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: '1987: When the Day Comes', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: '2gether', country: 'Thailand', year: 2020, type: 'Drama' },
    { title: '365: Repeat the Year', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: '38 Task Force', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: '55:15 Never Too Late', country: 'Thailand', year: 2021, type: 'Drama' },
    { title: '6/45', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: '71: Into the Fire', country: 'South Korea', year: 2010, type: 'Movie' },
    { title: 'A Company Man', country: 'South Korea', year: 2012, type: 'Movie' },
    { title: 'A Day', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: 'A Killer Paradox', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'A Korean Odyssey', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'A Melody to Remember', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'A Shop for Killers', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'A Taxi Driver', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: 'Abyss', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Again My Life', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Alice', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'All of Us Are Dead', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Along with the Gods 2: The Last 49 Days', country: 'South Korea', year: 2018, type: 'Movie' },
    { title: 'Along with the Gods: The Two Worlds', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: 'Ashfall', country: 'South Korea', year: 2019, type: 'Movie' },
    { title: 'Asura: The City of Madness', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'Asurado', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Awaken', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Bad and Crazy', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Bad Buddy', country: 'Thailand', year: 2021, type: 'Drama' },
    { title: 'Bad Genius', country: 'Thailand', year: 2020, type: 'Drama' },
    { title: 'Bad Genius', country: 'Thailand', year: 2017, type: 'Movie' },
    { title: 'Bad Prosecutor', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Bear Man', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Beyond Evil', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Birthday', country: 'South Korea', year: 2019, type: 'Movie' },
    { title: 'Bitch X Rich', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Black', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'Black Knight', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Blacklist', country: 'Thailand', year: 2019, type: 'Drama' },
    { title: 'Blind', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Blood', country: 'South Korea', year: 2015, type: 'Drama' },
    { title: 'Blue Birthday', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Boys over Flowers', country: 'South Korea', year: 2009, type: 'Drama' },
    { title: 'Bring It On, Ghost', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Cheer Up', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Cinderella and the Four Knights', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Citizen of a Kind', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'City Hunter', country: 'South Korea', year: 2011, type: 'Drama' },
    { title: 'Class of Lies', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Cobweb', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Collectors', country: 'South Korea', year: 2020, type: 'Movie' },
    { title: 'Commitment', country: 'South Korea', year: 2013, type: 'Movie' },
    { title: 'Concrete Utopia', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Confidential Assignment 2: International', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: 'Connect', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Count', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Crash Landing on You', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Crazy Little Thing Called Love', country: 'Thailand', year: 2010, type: 'Movie' },
    { title: 'Criminal Minds', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'D-Day', country: 'South Korea', year: 2015, type: 'Drama' },
    { title: 'D.P.', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'D.P. Season 2', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Daily Dose of Sunshine', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Dangerous Boys', country: 'Thailand', year: 2014, type: 'Movie' },
    { title: 'Dark Hole', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Dead Man', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'Death Bell', country: 'South Korea', year: 2008, type: 'Movie' },
    { title: 'Death Bell 2: Bloody Camp', country: 'South Korea', year: 2010, type: 'Movie' },
    { title: 'Death Note', country: 'Japan', year: 2015, type: 'Drama' },
    { title: 'Death\'s Game', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Death\'s Game Part 2', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Decibel', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: 'Deep', country: 'Thailand', year: 2021, type: 'Movie' },
    { title: 'Descendants of the Sun', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Designated Survivor: 60 Days', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Dirty Laundry', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Doctor John', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Doctor Lawyer', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Doctor Prisoner', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Doctor Stranger', country: 'South Korea', year: 2014, type: 'Drama' },
    { title: 'Doctors', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Don\'t Touch My Gang', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Double Savage', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Dr. Cheon and Lost Talisman', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Dr. Romantic', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Dr. Romantic Season 2', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Dreaming of a Freaking Fairytale', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Duty after School: Part 1', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Duty after School: Part 2', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Elite League', country: 'South Korea', year: 2023, type: 'TV Show' },
    { title: 'Emergency Declaration', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: 'Enigma', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Escape from Mogadishu', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Eulachacha Waikiki', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: 'Exhuma', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'Extracurricular', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Extraordinary Attorney Woo', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Extreme Job', country: 'South Korea', year: 2019, type: 'Movie' },
    { title: 'Fabricated City', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: 'Family by Choice', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Fight for My Way', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'Fleet of Time', country: 'Thailand', year: 2019, type: 'Drama' },
    { title: 'Flower of Evil', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Friend Zone', country: 'Thailand', year: 2019, type: 'Movie' },
    { title: 'Friendly Rivalry', country: 'South Korea', year: 2025, type: 'Drama' },
    { title: 'Friends Never Die', country: 'Thailand', year: 2012, type: 'Movie' },
    { title: 'Gangnam Zombie', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Gate', country: 'South Korea', year: 2018, type: 'Movie' },
    { title: 'Gaus Electronics', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Get Rich', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Ghost Doctor', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Ghost Lab', country: 'Thailand', year: 2021, type: 'Movie' },
    { title: 'Ghost Ship', country: 'Thailand', year: 2015, type: 'Movie' },
    { title: 'Girl from Nowhere', country: 'Thailand', year: 2018, type: 'Drama' },
    { title: 'Girl from Nowhere Season 2', country: 'Thailand', year: 2021, type: 'Drama' },
    { title: 'Goblin', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Hansan: Rising Dragon', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: 'Happiness', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Hard Hit', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'He Is Psychometric', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Healer', country: 'South Korea', year: 2014, type: 'Drama' },
    { title: 'Hi! School - Love On', country: 'South Korea', year: 2014, type: 'Drama' },
    { title: 'Hidden Identity', country: 'South Korea', year: 2015, type: 'Drama' },
    { title: 'Hierarchy', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'High School Frenemy', country: 'Thailand', year: 2024, type: 'Drama' },
    { title: 'High School Return of a Gangster', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Hijack 1971', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'Hitman: Agent Jun', country: 'South Korea', year: 2020, type: 'Movie' },
    { title: 'Home School', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Hormones', country: 'Thailand', year: 2013, type: 'Drama' },
    { title: 'Hormones Season 2', country: 'Thailand', year: 2014, type: 'Drama' },
    { title: 'Hormones Season 3', country: 'Thailand', year: 2015, type: 'Drama' },
    { title: 'Hospital Playlist', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Hospital Playlist Season 2', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Hospital Ship', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'Hostage: Missing Celebrity', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Hwarang', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'I Hear Your Voice', country: 'South Korea', year: 2013, type: 'Drama' },
    { title: "I'm Tee, Me Too", country: 'Thailand', year: 2020, type: 'Drama' },
    { title: 'Imawa no Kuni no Alice', country: 'Japan', year: 2020, type: 'Drama' },
    { title: 'Imawa no Kuni no Alice Season 2', country: 'Japan', year: 2022, type: 'Drama' },
    { title: 'In Our Prime', country: 'South Korea', year: 2022, type: 'Movie' },
    { title: 'Inside Men', country: 'South Korea', year: 2015, type: 'Movie' },
    { title: 'Introverted Boss', country: 'South Korea', year: 2017, type: 'Drama' },
    { title: 'Island', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Island Part 2', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: "It's Okay to Not Be Okay", country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Itaewon Class', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Joint Security Area', country: 'South Korea', year: 2000, type: 'Movie' },
    { title: 'Jung_E', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Juvenile Justice', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Kairos', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Kill Bok Soon', country: 'South Korea', year: 2023, type: 'Movie' },
    { title: 'Kimi to Sekai ga Owaru Hi ni', country: 'Japan', year: 2021, type: 'Drama' },
    { title: 'Kimi to Sekai ga Owaru Hi ni Season 2', country: 'Japan', year: 2021, type: 'Drama' },
    { title: 'Kimi to Sekai ga Owaru Hi ni Season 3', country: 'Japan', year: 2022, type: 'Drama' },
    { title: 'Kingdom', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Kingdom Season 2', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Law School', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Lawless Lawyer', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: 'Left on Read', country: 'Hong Kong', year: 2023, type: 'Drama' },
    { title: "Let's Fight Ghost", country: 'Thailand', year: 2021, type: 'Drama' },
    { title: 'Leverage', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Liar Game', country: 'South Korea', year: 2014, type: 'Drama' },
    { title: 'Light Shop', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Local Hero', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Longing for You', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Make Me Shudder', country: 'Thailand', year: 2013, type: 'Movie' },
    { title: 'Make Me Shudder 2', country: 'Thailand', year: 2014, type: 'Movie' },
    { title: 'Make Me Shudder 3', country: 'Thailand', year: 2015, type: 'Movie' },
    { title: 'Marry My Husband', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'May Who?', country: 'Thailand', year: 2015, type: 'Movie' },
    { title: 'Melancholia', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Melting Me Softly', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Memories of the Alhambra', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: 'Memorist', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Midnight', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Midnight Museum', country: 'Thailand', year: 2023, type: 'Drama' },
    { title: 'Midnight Runners', country: 'South Korea', year: 2017, type: 'Movie' },
    { title: 'Military Prosecutor Doberman', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Miss & Mrs. Cops', country: 'South Korea', year: 2019, type: 'Movie' },
    { title: 'Missing: The Other Side', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Missing: The Other Side Season 2', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Mission 1: Possible', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Mission Cross', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'MIU 404', country: 'Japan', year: 2020, type: 'Drama' },
    { title: 'Moby Dick', country: 'South Korea', year: 2011, type: 'Movie' },
    { title: 'Money Heist: Korea - Joint Economic Area - Part 1', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Monstrous', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'Montage', country: 'South Korea', year: 2013, type: 'Movie' },
    { title: 'Moon Embracing the Sun', country: 'South Korea', year: 2012, type: 'Drama' },
    { title: 'Moorim School', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Mouse', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Move to Heaven', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Moving', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Mr. Queen', country: 'South Korea', year: 2020, type: 'Drama' },
    { title: 'Mr. Sunshine', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: 'Musudan', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'My Annoying Brother', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'My Engineer', country: 'Thailand', year: 2020, type: 'Drama' },
    { title: 'My Love from the Star', country: 'South Korea', year: 2013, type: 'Drama' },
    { title: 'My Man Is Cupid', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'My Name', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'My Precious', country: 'Thailand', year: 2024, type: 'Drama' },
    { title: 'My School President', country: 'Thailand', year: 2022, type: 'Drama' },
    { title: 'My Sweet Mobster', country: 'South Korea', year: 2024, type: 'Drama' },
    { title: 'Night Has Come', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Nightmare Teacher', country: 'South Korea', year: 2016, type: 'Drama' },
    { title: 'Northern Limit Line', country: 'South Korea', year: 2015, type: 'Movie' },
    { title: 'Numbers', country: 'South Korea', year: 2023, type: 'Drama' },
    { title: 'Officer Black Belt', country: 'South Korea', year: 2024, type: 'Movie' },
    { title: 'Okay! Madam', country: 'South Korea', year: 2020, type: 'Movie' },
    { title: 'On the Line', country: 'South Korea', year: 2021, type: 'Movie' },
    { title: 'Once Upon a Small Town', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'One Ordinary Day', country: 'South Korea', year: 2021, type: 'Drama' },
    { title: 'Operation Chromite', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'Our Blues', country: 'South Korea', year: 2022, type: 'Drama' },
    { title: 'P1H: The Beginning of a New World', country: 'South Korea', year: 2020, type: 'Movie' },
    { title: 'Pandora', country: 'South Korea', year: 2016, type: 'Movie' },
    { title: 'Parasite', country: 'South Korea', year: 2019, type: 'Movie' },
    { title: 'Partners for Justice', country: 'South Korea', year: 2018, type: 'Drama' },
    { title: 'Partners for Justice Season 2', country: 'South Korea', year: 2019, type: 'Drama' },
    { title: 'Peaceful Property', country: 'Thailand', year: 2024, type: 'Drama' },
    { title: 'Pee Mak', country: 'Thailand', year: 2013, type: 'Movie' }
];


let sortDirection = 1;
let itemsPerPage = 5;
let currentPage = 1;

// Function to generate the table content with pagination
function generateTable() {
    const tableBody = document.getElementById('cTableBody');
    tableBody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, dramas.length);

    for (let i = startIndex; i < endIndex; i++) {
        const drama = dramas[i];
        const dataNo = i + 1;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dataNo}</td>
            <td>${drama.title}</td>
            <td>${drama.country}</td>
            <td>${drama.year}</td>
            <td>${drama.type}</td>
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

    if (totalPages <= 1) return; // No pagination needed if only one page

    const fragment = document.createDocumentFragment();

    if (currentPage > 1) {
        fragment.appendChild(createPageButton('«', currentPage - 1));
    }

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            fragment.appendChild(createPageButton(i, i));
        }
    } else {
        if (currentPage > 2) fragment.appendChild(createPageButton(1, 1));
        if (currentPage > 3) fragment.appendChild(createDots());

        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        for (let i = start; i <= end; i++) {
            fragment.appendChild(createPageButton(i, i));
        }

        if (currentPage < totalPages - 2) fragment.appendChild(createDots());
        if (currentPage < totalPages - 1) fragment.appendChild(createPageButton(totalPages, totalPages));
    }

    if (currentPage < totalPages) {
        fragment.appendChild(createPageButton('»', currentPage + 1));
    }

    pagination.appendChild(fragment);
}

// Function to create individual page buttons
function createPageButton(text, page) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('pagination-button');
    if (page === currentPage) button.classList.add('active');

    button.addEventListener('click', () => {
        currentPage = page;
        generateTable();
    });

    return button;
}

// Function to create dots
function createDots() {
    const dots = document.createElement('span');
    dots.textContent = '...';
    dots.classList.add('pagination-dots');
    return dots;
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

    sortDirection *= -1;
    generateTable();
}

// Function to handle items per page change
function changeItemsPerPage(value) {
    itemsPerPage = parseInt(value);
    currentPage = 1;
    generateTable();
}

/*
// Function to calculate statistics
function calculateStats(dramas) {
    const stats = {
        totalEntries: dramas.length,
        byCountry: {},
        byType: {},
        byYear: {}
    };

    dramas.forEach(drama => {
        // Count by Country
        stats.byCountry[drama.country] = (stats.byCountry[drama.country] || 0) + 1;

        // Count by Type
        stats.byType[drama.type] = (stats.byType[drama.type] || 0) + 1;

        // Count by Year
        stats.byYear[drama.year] = (stats.byYear[drama.year] || 0) + 1;
    });

    return stats;
}

// Function to display statistics with dropdowns
function displayStats(stats) {
    const statsDiv = document.getElementById('watch-stats');
    if (!statsDiv) return;

    let html = `
        <h2>Total Entries: <span id="total-entries">${stats.totalEntries}</span></h2>

        <!-- Dropdown for Country -->
        <label for="country-select">By Country:</label>
        <select id="country-select" onchange="updateStats()">
            <option value="">All</option>`;
    for (const country in stats.byCountry) {
        html += `<option value="${country}">${country}</option>`;
    }
    html += `</select>`;

    // Dropdown for Type
    html += `<label for="type-select">By Type:</label>
        <select id="type-select" onchange="updateStats()">
            <option value="">All</option>`;
    for (const type in stats.byType) {
        html += `<option value="${type}">${type}</option>`;
    }
    html += `</select>`;

    // Dropdown for Year
    html += `<label for="year-select">By Year:</label>
        <select id="year-select" onchange="updateStats()">
            <option value="">All</option>`;
    const sortedYears = Object.keys(stats.byYear).sort((a, b) => a - b);
    sortedYears.forEach(year => {
        html += `<option value="${year}">${year}</option>`;
    });
    html += `</select>`;

    // Display the list of drama names
    html += `<div id="drama-list"></div>`;
    
    statsDiv.innerHTML = html;

}

// Function to filter and update stats based on dropdown selections
function updateStats() {
    const selectedCountry = document.getElementById('country-select').value;
    const selectedType = document.getElementById('type-select').value;
    const selectedYear = document.getElementById('year-select').value;

    let filteredDramas = dramas;

    if (selectedCountry) {
        filteredDramas = filteredDramas.filter(drama => drama.country === selectedCountry);
    }
    if (selectedType) {
        filteredDramas = filteredDramas.filter(drama => drama.type === selectedType);
    }
    if (selectedYear) {
        filteredDramas = filteredDramas.filter(drama => drama.year === parseInt(selectedYear));
    }

    // Update the total entries count
    document.getElementById('total-entries').textContent = filteredDramas.length;

    // Display the list of drama names
    const dramaListDiv = document.getElementById('drama-list');
    if (dramaListDiv) {
        dramaListDiv.innerHTML = filteredDramas.length > 0 ? 
            `<ul>${filteredDramas.map(drama => `<li>${drama.title}</li>`).join('')}</ul>` : 
            '<p>No Entry Found</p>';
    }
}
*/

function getStats() {
    const watchStats = document.getElementById('watch-stats');
    watchStats.innerHTML = `Total Entries: <b>${dramas.length}</b>`;
}


// Load the statistics on page load
function watchlistOnLoad() {
    /*
    const stats = calculateStats(dramas);
    displayStats(stats);
    */
    getStats();
    generateTable();
}

// Call the function on page load
window.onload = watchlistOnLoad;
