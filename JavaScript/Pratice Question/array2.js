let companies = ["Boomberg", "microsoft", "patho", "Google", "IBM", "Netflix"];
console.log(`Before CHANGES: ${companies}`);
let removedCompany = companies.shift(); // Removes the first element 'Boomberg'
console.log(`After shift: ${companies}`);
console.log(`Removed company: ${removedCompany}`); // Output: 'Boomberg'
let removeAdd = companies.splice(1,1, "Indrive"); // Adds 'Indrive' to the start of the array
console.log(`After splice: ${companies}`);
console.log(`Removed company: ${removeAdd}`); // Output: 'microsoft'
let newCompanies = companies.push(["Amazon"]);
console.log(`After push: ${companies}`);