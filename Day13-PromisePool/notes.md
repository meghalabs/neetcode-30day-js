#Day-12 ⏱️Promise Pool 

## 🧩 Problem Statement

In JavaScript, a Promise Pool (or Concurrency Pool) is a technique to manage the number of promises executing concurrently. It's particularly useful when:

You have many asynchronous tasks (e.g. fetching URLs or processing files).

You want to limit concurrency (e.g. only 5 promises run at once) to avoid overloading the system.

const tasks = [
  () => fetch(url1),
  () => fetch(url2),
  () => fetch(url3),
  // ...
];
const concurrency = 2;


You want to run only 2 fetches at a time. As soon as one finishes, start the next.

```async function promisePool(functions, n) {
  let i = 0;

  async function runner() {
    while (i < functions.length) {
      const fn = functions[i++];
      await fn();  // wait for each one in this runner
    }
  }

  const runners = Array(n).fill(0).map(runner);
  await Promise.all(runners);
}