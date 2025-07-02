function arrayToMatrix(arr) {
  // Step 1: Collect all unique keys from the input objects
  const columnSet = new Set();
  arr.forEach((obj) => {
    Object.keys(obj).forEach((key) => columnSet.add(key));
  });


  const columns = Array.from(columnSet); // preserve insertion order

  // Step 2: Initialize matrix with header row
  const matrix = [columns];

  // Step 3: Fill rows by mapping object values to the header columns
  for (const obj of arr) {
    const row = columns.map((col) => (col in obj ? obj[col] : ""));
    matrix.push(row);
  }

  return matrix;
}

const input = [
  { name: "Alice", age: 30 },
  { name: "Bob", location: "NY" },
  { age: 22, location: "SF" },
];

console.log(arrayToMatrix(input));
