// Function to get an array of student IDs
export default function getListStudentIds(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    return [];
  }

  // Use map to extract the id from each object
  return array.map((student) => student.id);
}
