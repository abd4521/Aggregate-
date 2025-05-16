const meritData = [
    { discipline: "Architectural Engineering", campus: "LHR", category: "A1", cutoff: 74.33 },
    { discipline: "Architectural Engineering", campus: "LHR", category: "A2", cutoff: 71.06 },
    { discipline: "Architectural Engineering", campus: "LHR", category: "S", cutoff: 51.29 },
    { discipline: "Architecture", campus: "LHR", category: "A1", cutoff: 76.01 },
    { discipline: "Architecture", campus: "LHR", category: "A2", cutoff: 72.11 },
    { discipline: "Architecture", campus: "LHR", category: "N", cutoff: 71.67 },
    { discipline: "Architecture", campus: "LHR", category: "S", cutoff: 51.89 },
    { discipline: "Architecture", campus: "NWL", category: "A1", cutoff: 50.10 },
    { discipline: "Automotive Engineering", campus: "LHR", category: "A1", cutoff: 70.29 },
    { discipline: "Automotive Engineering", campus: "LHR", category: "A2", cutoff: 63.98 },
    { discipline: "Bachelor of Business Administration", campus: "LHR", category: "A1", cutoff: 65.59 },
    { discipline: "Bachelor of Business Administration", campus: "KSK", category: "A1-M", cutoff: 59.42 },
    { discipline: "Bachelor of Business Administration", campus: "LHR", category: "A2", cutoff: 51.68 },
    { discipline: "Bachelor of Business Administration", campus: "KSK", category: "A1", cutoff: 50.61 },
    { discipline: "Bachelor of Business IT", campus: "LHR", category: "A1", cutoff: 81.02 },
    { discipline: "Bachelor of Business IT", campus: "LHR", category: "A2-M", cutoff: 78.00 },
    { discipline: "Bachelor of Business IT", campus: "LHR", category: "A2", cutoff: 68.93 },
    { discipline: "Biomedical Engineering", campus: "KSK", category: "A1-M", cutoff: 78.93 },
    { discipline: "Biomedical Engineering", campus: "KSK", category: "A2-M", cutoff: 73.17 },
    { discipline: "Biomedical Engineering", campus: "KSK", category: "A1", cutoff: 65.45 },
    { discipline: "Biomedical Engineering", campus: "NWL", category: "A1-M", cutoff: 64.07 },
    { discipline: "Biomedical Engineering", campus: "KSK", category: "P", cutoff: 57.26 },
    { discipline: "Biomedical Engineering", campus: "KSK", category: "A2", cutoff: 54.41 },
    { discipline: "Biomedical Engineering", campus: "NWL", category: "A1", cutoff: 50.06 },
    { discipline: "Chemical Engineering", campus: "LHR", category: "N", cutoff: 72.92 },
    { discipline: "Chemical Engineering", campus: "LHR", category: "A1", cutoff: 70.77 },
    { discipline: "Chemical Engineering", campus: "LHR", category: "A2", cutoff: 66.86 },
    { discipline: "Chemical Engineering", campus: "KSK", category: "A1", cutoff: 59.41 },
    { discipline: "Chemical Engineering", campus: "LHR", category: "S", cutoff: 57.54 },
    { discipline: "Chemical Engineering", campus: "KSK", category: "A2", cutoff: 55.00 },
    { discipline: "Chemical Engineering", campus: "LHR", category: "NM", cutoff: 51.48 },
    { discipline: "Chemical Engineering", campus: "FSD", category: "A1", cutoff: 50.63 },
    { discipline: "Chemistry", campus: "LHR", category: "A1-M", cutoff: 58.62 },
    { discipline: "Chemistry", campus: "KSK", category: "A1", cutoff: 55.72 },
    { discipline: "Chemistry", campus: "LHR", category: "A1", cutoff: 55.20 },
    { discipline: "Chemistry", campus: "KSK", category: "A1-M", cutoff: 53.69 },
    { discipline: "City & Regional Planning", campus: "LHR", category: "N", cutoff: 67.20 },
    { discipline: "City & Regional Planning", campus: "LHR", category: "A1", cutoff: 66.48 },
    { discipline: "City & Regional Planning", campus: "LHR", category: "A2", cutoff: 65.96 },
    { discipline: "Civil Engineering", campus: "LHR", category: "A1", cutoff: 73.21 },
    { discipline: "Civil Engineering", campus: "LHR", category: "A2", cutoff: 66.57 },
    { discipline: "Civil Engineering", campus: "LHR", category: "N", cutoff: 66.54 },
    { discipline: "Civil Engineering", campus: "LHR", category: "P", cutoff: 56.73 },
    { discipline: "Civil Engineering", campus: "NWL", category: "P", cutoff: 55.86 },
    { discipline: "Civil Engineering", campus: "LHR", category: "NM", cutoff: 55.50 },
    { discipline: "Civil Engineering", campus: "NWL", category: "S", cutoff: 54.94 },
    { discipline: "Civil Engineering", campus: "NWL", category: "A1", cutoff: 54.58 },
    { discipline: "Civil Engineering", campus: "LHR", category: "S", cutoff: 53.62 },
    { discipline: "Computer Engineering", campus: "LHR", category: "A1", cutoff: 76.26 },
    { discipline: "Computer Engineering", campus: "LHR", category: "A2", cutoff: 72.79 },
    { discipline: "Computer Engineering", campus: "LHR", category: "NM", cutoff: 67.82 },
    { discipline: "Computer Science", campus: "LHR", category: "A1", cutoff: 84.57 },
    { discipline: "Computer Science", campus: "LHR", category: "A2", cutoff: 81.99 },
    { discipline: "Computer Science", campus: "KSK", category: "A1", cutoff: 80.52 },
    { discipline: "Computer Science", campus: "KSK", category: "A2", cutoff: 79.67 },
    { discipline: "Computer Science", campus: "FSD", category: "A1", cutoff: 79.28 },
    { discipline: "Computer Science", campus: "LHR", category: "A2", cutoff: 78.79 },
    { discipline: "Computer Science", campus: "KSK", category: "A1", cutoff: 76.40 },
    { discipline: "Computer Science", campus: "RCET", category: "A1", cutoff: 75.40 },
    { discipline: "Computer Science", campus: "NWL", category: "A1", cutoff: 75.04 },
    { discipline: "Computer Science", campus: "KSK", category: "A2", cutoff: 74.04 },
    { discipline: "Computer Science", campus: "FSD", category: "A1", cutoff: 72.28 },
    { discipline: "Computer Science", campus: "NWL", category: "A1", cutoff: 67.84 },
    { discipline: "Computer Science", campus: "LHR", category: "NM", cutoff: 66.63 },
    { discipline: "Computer Science", campus: "RCET", category: "A1", cutoff: 66.18 },
    { discipline: "Computer Science", campus: "KSK", category: "NM", cutoff: 66.11 },
    { discipline: "Computer Science", campus: "NWL", category: "NM", cutoff: 56.87 },
    { discipline: "Data Science", campus: "LHR", category: "A1-M", cutoff: 82.94 },
    { discipline: "Data Science", campus: "LHR", category: "A2-M", cutoff: 80.65 },
    { discipline: "Data Science", campus: "LHR", category: "A1", cutoff: 79.53 },
    { discipline: "Data Science", campus: "LHR", category: "A2", cutoff: 76.27 },
    { discipline: "Data Science", campus: "LHR", category: "NM", cutoff: 69.13 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "A1", cutoff: 73.30 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "L", cutoff: 72.74 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "R", cutoff: 71.90 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "O", cutoff: 71.22 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "A2", cutoff: 67.91 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "N", cutoff: 67.56 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "P", cutoff: 67.54 },
    { discipline: "Electrical Engineering", campus: "KSK", category: "A1", cutoff: 67.41 },
    { discipline: "Electrical Engineering", campus: "KSK", category: "A2", cutoff: 66.14 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "NM", cutoff: 64.36 },
    { discipline: "Electrical Engineering", campus: "FSD", category: "A1", cutoff: 59.25 },
    { discipline: "Electrical Engineering", campus: "NWL", category: "S", cutoff: 56.52 },
    { discipline: "Electrical Engineering", campus: "RCET", category: "S", cutoff: 54.77 },
    { discipline: "Electrical Engineering", campus: "RCET", category: "A1", cutoff: 54.52 },
    { discipline: "Electrical Engineering", campus: "LHR", category: "S", cutoff: 54.29 },
    { discipline: "Electrical Engineering", campus: "KSK", category: "S", cutoff: 50.57 },
    { discipline: "Electrical Engineering", campus: "FSD", category: "S", cutoff: 50.57 },
    { discipline: "Electrical Engineering", campus: "NWL", category: "A1", cutoff: 50.06 },
    { discipline: "Energy Systems Management", campus: "KSK", category: "A1-M", cutoff: 76.76 },
    { discipline: "Energy Systems Management", campus: "KSK", category: "A1", cutoff: 50.80 },
    { discipline: "Environmental Engineering", campus: "LHR", category: "A1", cutoff: 62.77 },
    { discipline: "Environmental Engineering", campus: "LHR", category: "NM", cutoff: 62.06 },
    { discipline: "Environmental Engineering", campus: "LHR", category: "S", cutoff: 55.60 },
    { discipline: "Environmental Science", campus: "LHR", category: "S", cutoff: 87.07 },
    { discipline: "Environmental Science", campus: "LHR", category: "A1-M", cutoff: 50.73 },
    { discipline: "Environmental Science", campus: "LHR", category: "A1", cutoff: 50.61 },
    { discipline: "Food Science & Technology", campus: "KSK", category: "A1-M", cutoff: 62.11 },
    { discipline: "Food Science & Technology", campus: "KSK", category: "A1", cutoff: 54.68 },
    { discipline: "Geological Engineering", campus: "LHR", category: "A1", cutoff: 51.14 },
    { discipline: "Industrial & Manufacturing Eng", campus: "LHR", category: "A1", cutoff: 65.28 },
    { discipline: "Industrial & Manufacturing Eng", campus: "LHR", category: "A2", cutoff: 64.14 },
    { discipline: "Industrial & Manufacturing Eng", campus: "LHR", category: "S", cutoff: 55.14 },
    { discipline: "Industrial & Manufacturing Eng", campus: "RCET", category: "A1", cutoff: 51.28 },
    { discipline: "Mathematics", campus: "LHR", category: "S", cutoff: 77.46 },
    { discipline: "Mathematics", campus: "LHR", category: "A1", cutoff: 54.14 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "A1", cutoff: 74.05 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "L", cutoff: 73.02 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "A2", cutoff: 67.84 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "N", cutoff: 67.14 },
    { discipline: "Mechanical Engineering", campus: "KSK", category: "A1", cutoff: 66.41 },
    { discipline: "Mechanical Engineering", campus: "KSK", category: "A2", cutoff: 63.72 },
    { discipline: "Mechanical Engineering", campus: "RCET", category: "S", cutoff: 60.52 },
    { discipline: "Mechanical Engineering", campus: "NWL", category: "P", cutoff: 59.34 },
    { discipline: "Mechanical Engineering", campus: "KSK", category: "S", cutoff: 53.05 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "S", cutoff: 52.69 },
    { discipline: "Mechanical Engineering", campus: "LHR", category: "NM", cutoff: 51.48 },
    { discipline: "Mechanical Engineering", campus: "NWL", category: "A1", cutoff: 51.28 },
    { discipline: "Mechanical Engineering", campus: "RCET", category: "A1", cutoff: 50.90 },
    { discipline: "Mechatronics & Control Eng", campus: "LHR", category: "A1", cutoff: 73.07 },
    { discipline: "Mechatronics & Control Eng", campus: "LHR", category: "A2", cutoff: 70.60 },
    { discipline: "Mechatronics & Control Eng", campus: "LHR", category: "S", cutoff: 67.50 },
    { discipline: "Mechatronics & Control Eng", campus: "FSD", category: "S", cutoff: 56.21 },
    { discipline: "Mechatronics & Control Eng", campus: "LHR", category: "NM", cutoff: 51.11 },
    { discipline: "Mechatronics & Control Eng", campus: "FSD", category: "A1", cutoff: 50.06 },
    { discipline: "Metallurgical & Materials Eng", campus: "LHR", category: "N", cutoff: 67.14 },
    { discipline: "Metallurgical & Materials Eng", campus: "LHR", category: "A1", cutoff: 62.23 },
    { discipline: "Metallurgical & Materials Eng", campus: "LHR", category: "S", cutoff: 55.18 },
    { discipline: "Mining Engineering", campus: "LHR", category: "N", cutoff: 53.97 },
    { discipline: "Mining Engineering", campus: "LHR", category: "A1", cutoff: 51.11 },
    { discipline: "Petroleum & Gas Engineering", campus: "LHR", category: "A1", cutoff: 69.84 },
    { discipline: "Petroleum & Gas Engineering", campus: "LHR", category: "A2", cutoff: 67.97 },
    { discipline: "Petroleum & Gas Engineering", campus: "LHR", category: "S", cutoff: 59.22 },
    { discipline: "Petroleum & Gas Engineering", campus: "LHR", category: "N", cutoff: 58.25 },
    { discipline: "Physics", campus: "LHR", category: "S", cutoff: 77.04 },
    { discipline: "Physics", campus: "LHR", category: "A1", cutoff: 59.30 },
    { discipline: "Physics", campus: "LHR", category: "A1-M", cutoff: 54.83 },
    { discipline: "Polymer Engineering", campus: "LHR", category: "A1", cutoff: 53.13 },
    { discipline: "Product & Industrial Design", campus: "LHR", category: "S", cutoff: 62.87 },
    { discipline: "Product & Industrial Design", campus: "LHR", category: "A2", cutoff: 59.75 },
    { discipline: "Product & Industrial Design", campus: "LHR", category: "A1", cutoff: 58.88 },
    { discipline: "Software Engineering", campus: "KSK", category: "A1-M", cutoff: 83.84 },
    { discipline: "Software Engineering", campus: "KSK", category: "A2-M", cutoff: 82.89 },
    { discipline: "Software Engineering", campus: "KSK", category: "A1", cutoff: 78.88 },
    { discipline: "Software Engineering", campus: "KSK", category: "A2", cutoff: 78.02 },
    { discipline: "Software Engineering", campus: "KSK", category: "S", cutoff: 71.86 },
    { discipline: "Software Engineering", campus: "KSK", category: "NM", cutoff: 59.21 },
    { discipline: "Textile Engineering", campus: "FSD", category: "A1", cutoff: 50.06 },
    { discipline: "Transportation Engineering", campus: "LHR", category: "S", cutoff: 57.12 },
    { discipline: "Transportation Engineering", campus: "LHR", category: "A1", cutoff: 55.45 }
];

// DOM Elements
const metricMarksInput = document.getElementById('metric');
const firstYearMarksInput = document.getElementById('firstYear');
const ecatMarksInput = document.getElementById('ecat');
const calculateBtn = document.getElementById('calculateAggregate');
const aggregateInput = document.getElementById('aggregate');
const campusSelect = document.getElementById('campus');
const categorySelect = document.getElementById('category');
const eligibleProgramsDiv = document.getElementById('eligiblePrograms');
const borderlineProgramsDiv = document.getElementById('borderlinePrograms');

// Initialize dropdowns
function initializeDropdowns() {
    // Add 'All' option to campus dropdown
    const allCampusOption = document.createElement('option');
    allCampusOption.value = 'All';
    allCampusOption.textContent = 'All Campuses';
    campusSelect.appendChild(allCampusOption);

    // Add 'All' option to category dropdown
    const allCategoryOption = document.createElement('option');
    allCategoryOption.value = 'All';
    allCategoryOption.textContent = 'All Categories';
    categorySelect.appendChild(allCategoryOption);

    const campuses = [...new Set(meritData.map(item => item.campus))];
    const categories = [...new Set(meritData.map(item => item.category))];

    campuses.forEach(campus => {
        const option = document.createElement('option');
        option.value = campus;
        option.textContent = campus;
        campusSelect.appendChild(option);
    });

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Calculate aggregate
function calculateAggregate() {
    const metricMarks = parseFloat(metricMarksInput.value) || 0;
    const firstYearMarks = parseFloat(firstYearMarksInput.value) || 0;
    const ecatMarks = parseFloat(ecatMarksInput.value) || 0;

    // Validate input ranges
    if (metricMarks < 0 || metricMarks > 1100) {
        alert('Metric marks must be between 0 and 1100');
        return;
    }
    if (firstYearMarks < 0 || firstYearMarks > 570) {
        alert('First Year marks must be between 0 and 1100');
        return;
    }
    if (ecatMarks < 0 || ecatMarks > 400) {
        alert('ECAT marks must be between 0 and 400');
        return;
    }

    // Calculate aggregate
    const metricPercentage = (metricMarks / 1100) * 17;
    const firstYearPercentage = (firstYearMarks / 570) * 50;
    const ecatPercentage = (ecatMarks / 400) * 33;

    const aggregate = metricPercentage + firstYearPercentage + ecatPercentage;
    aggregateInput.value = aggregate.toFixed(4);

    // Recalculate eligibility
    calculateEligibility();
}

// Calculate eligibility
function calculateEligibility() {
    const aggregate = parseFloat(aggregateInput.value) || 0;
    const selectedCampus = campusSelect.value;
    const selectedCategory = categorySelect.value;

    const eligible = meritData.filter(item => {
        const isEligible = aggregate >= item.cutoff;
        const campusMatch = selectedCampus === 'All' || item.campus === selectedCampus;
        const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
        return isEligible && campusMatch && categoryMatch;
    });

    const borderline = meritData.filter(item => {
        const difference = Math.abs(aggregate - item.cutoff);
        const isBorderline = difference <= 1;
        const campusMatch = selectedCampus === 'All' || item.campus === selectedCampus;
        const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
        return isBorderline && campusMatch && categoryMatch && !eligible.includes(item);
    });

    displayPrograms(eligible, eligibleProgramsDiv, false);
    displayPrograms(borderline, borderlineProgramsDiv, true);
}

// Display programs
function displayPrograms(programs, container, isBorderline) {
    container.innerHTML = '';
    
    if (programs.length === 0) {
        container.innerHTML = `<p>No ${isBorderline ? 'borderline' : 'eligible'} programs found.</p>`;
        return;
    }

    const programsGrid = document.createElement('div');
    programsGrid.className = 'programs-grid';

    programs.forEach(program => {
        const card = document.createElement('div');
        card.className = `program-card ${isBorderline ? 'borderline' : ''}`;
        const difference = (parseFloat(aggregateInput.value) - program.cutoff).toFixed(2);
        const differenceText = isBorderline ? 
            `<p><strong>Difference from Cutoff:</strong> ${difference}%</p>` : '';
        
        card.innerHTML = `
            <h3>${program.discipline}</h3>
            <p><strong>Campus:</strong> ${program.campus}</p>
            <p><strong>Category:</strong> ${program.category}</p>
            <p><strong>Cutoff:</strong> ${program.cutoff}%</p>
            ${differenceText}
        `;
        programsGrid.appendChild(card);
    });

    container.appendChild(programsGrid);
}

// Event Listeners
calculateBtn.addEventListener('click', calculateAggregate);
campusSelect.addEventListener('change', calculateEligibility);
categorySelect.addEventListener('change', calculateEligibility);

// Initialize
initializeDropdowns();
calculateEligibility(); 