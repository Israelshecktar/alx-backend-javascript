// script read database  and
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content by new lines
    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove header line
    lines.shift();

    // Process the remaining lines
    const students = lines.map((line) => line.split(',')).filter((item) => item.length === 4);
    const totalStudents = students.length;

    console.log(`Number of students: ${totalStudents}`);

    // Group by field
    const fields = {};
    students.forEach(([firstname, field]) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
