/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */



async function promisePool(functions, n) {
  let i = 0;
  let completed = 0;

  return new Promise((resolve, reject) => {
  function runNext() {
  if (i >= functions.length) return;

  const fn = functions[i++];
  fn()
    .then(() => {
      completed++;
      runNext(); // keep the pipeline going
      if (completed === functions.length) {
        resolve();
      }
    })
    .catch(reject);
}


    for (let j = 0; j < n; j++) {
      runNext(); // Start n runners
    }
  });
}







const sleep = (t) => new Promise(res => setTimeout(res, t));
const functions = [
  () => sleep(500),
  () => sleep(300),
  () => sleep(400),
  () => sleep(100)
];

const start = Date.now();
promisePool(functions, 2).then(() => {
  console.log("All tasks done in", Date.now() - start, "ms");
});
