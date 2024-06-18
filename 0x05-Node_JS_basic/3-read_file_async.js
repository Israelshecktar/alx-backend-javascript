// script to write into a file asyncronomously
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Remove the header line
      lines.shift();

      // Process the remaining lines
      const students = lines.map((line) => line.split(',')).filter((item) => item.length === 4);
      const totalStudents = students.length;

      console.log(`Number of students: ${totalStudents}`);

      const fields = {};
      students.forEach(([firstname,
      /* eslint-disable-line no-unused-vars */ _lastname,
        /* eslint-disable-line no-unused-vars */ _age, field]) => {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
