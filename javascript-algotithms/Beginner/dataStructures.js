// Array Implementation
// No context, no idea what the data means compared to te object implementation
// let user = ['Obosi', 'Philip', 200, 'Nigeria', 'Frontend', ['English', 'Igbo','French']]

// Object Implementation
let user = {
  firstName: 'Philip',
  lastName: 'Obosi',
  contributions: 200,
  country: 'Nigeria',
  role: 'Frontend',
  languagesSpoken: ['English', 'Igbo','French']
}

// Checking if an object has a property is best done with .hasOwnProperty
console.log(user.hasOwnProperty('firstName'));
console.log(user.hasOwnProperty('middleName'));
