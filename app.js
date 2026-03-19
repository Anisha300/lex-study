// search logic for finding cases

function searchCases(cases, query) {
    return cases.filter(caseItem => {
        return Object.values(caseItem).some(value => 
            String(value).toLowerCase().includes(query.toLowerCase())
        );
    });
}

// Example usage:
const cases = [
    { id: 1, title: 'Case A', description: 'Description for case A' },
    { id: 2, title: 'Case B', description: 'Description for case B' },
    { id: 3, title: 'Case C', description: 'Description for case C' }
];

const searchTerm = 'A';
const foundCases = searchCases(cases, searchTerm);
console.log(foundCases); // Output: Cases that match the search term