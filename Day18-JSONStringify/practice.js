var stringify = function (object) {
  // check for null and undefined
  if (object === null || object === undefined) return String(object);

  // check for primitive types - numbers boolean, string, symbol, bigint
  if (typeof object !== "object") return String(object);

  //handle arratys and objects
  if (Array.isArray(object)) {
    let result = object.map((item) => stringify(item));
    return `[ ${result.join(", ")} ]`;
  }
  if (typeof object === "object") {
    // let result = [];
    // for (let key in object) {
    //   result.push(`"${key}": ${stringify(object[key])}`);
    // }
    const keys = Object.keys(object);
    const keyValues = keys.map((key) => {
      return `"${key}": ${stringify(object[key])}`;
    });
    return `{ ${keyValues.join(", ")} }`;
  }

  //strings
  if (typeof object === "string") {
    return `"${object}"`; // wrap strings in quotes
  }

  return String(object); // fallback for any other types
};
// Test cases
const input = {
  name: "Alice",
  age: 30,
  active: true,
  notes: null,
  tags: ["engineer", undefined, "mom"],
  profile: {
    city: "New York",
    score: undefined,
    greet: () => "hi",
  },
};

console.log(stringify(input));
