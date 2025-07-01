function arrayToMatrix(arr) {
  const columnSet = new Set();

  function getKeys(obj, path) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        getKeys(obj[key], newPath);
      } else {
        columnSet.add(newPath);
      }
    }
  }

  arr.forEach((obj) => getKeys(obj, ""));
  const columns = Array.from(columnSet);
  const matrix = [columns]; // header row

  function getValues(obj, path, keyToVal) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  for (const obj of arr) {
    const keyToVal = {};
    const row = [];
    getValues(obj, "", keyToVal);
    for (const col of columns) {
      row.push(col in keyToVal ? keyToVal[col] : "");
    }
    matrix.push(row);
  }

  return matrix;
}

// Test
const input = [
  { name: "Charlie", age: 35, active: true, hobbies: ["reading", "hiking"] },
  {
    name: "David",
    age: 28,
    active: true,
    address: { city: "New York", zip: "10001" },
  },
];

const result = arrayToMatrix(input);
console.log(result);
