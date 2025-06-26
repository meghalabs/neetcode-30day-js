var areDeepEqual = function (o1, o2) {
  //handle null

  if (o1 === null || o2 === null) return o1 === o2; // both are null
  //objects can be recursive, so our function
  //base case

  if (typeof o1 !== typeof o2) {
    return false;
  }

  //at tgis point they both are same type but if they are not objects
  // we can check if they are primitive types
  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  if (Array.isArray(o1) || Array.isArray(o2)) {
    // both should be arrays

    if (String(o1) !== String(o2)) return false; // this check if they are same length

    for (let i = 0; i < o1.length; i++) {
      if (!areDeepEqual(o1[i], o2[i])) {
        return false;
      }
    }
  } else {
    //objects

    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false; // if they have different number of keys
    }
    for (keys in o1) {
      if (!areDeepEqual(o1[keys], o2[keys])) {
        return false; // if they have different keys or values
      }
    }
  }

  return true;
};
// Test cases
console.log(areDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(areDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(areDeepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areDeepEqual([1, 2, 3], [1, 2, 4])); // false