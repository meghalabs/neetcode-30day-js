function objectDiff(o1, o2) {
  //check if both premitives

  function isObject(o) {
    return typeof o === "object" && o !== null;
  }

  if (!isObject(o1) && !isObject(o2)) {
    return o1 === o2 ? {} : [o1, o2];
  }

  //check if one is premitve not other
  if (!isObject(o1) || !isObject(o2)) {
    return [o1, o2];
  }

  //if one is array not other
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return [o1, o2];
  }

  //both are objevct or array
  const diff = {};

  //                      // Object.keys(o1).forEach((key) => {
  // for (const key in o1) { // if (key in o2) {
  //   if (o2.hasOwnProperty(key)) {
  //     const subDiff = objectDiff(o1[key], o2[key]);
  //     if (Object.keys(subDiff).length > 0) {
  //       diff[key] = subDiff;
  //     }
  //   }
  //   return diff[key];
  // }

  for (const key in o1) {
    if (o2.hasOwnProperty(key)) {
      const res = objectDiff(o1[key], o2[key]);
      if (
        res !== undefined &&
        (typeof res !== "object" || Object.keys(res).length > 0)
      ) {
        diff[key] = res;
      }
    }
  }

  return Object.keys(diff).length > 0 ? diff : {};
}

const obj1 = {
  a: 5,
  v: 6,
  z: [1, 2, 4, [2, 5, 7]],
};

const obj2 = {
  a: 5,
  v: 7,
  z: [1, 2, 3, [1]],
};

console.log(JSON.stringify(objectDiff(obj1, obj2), null, 2));
