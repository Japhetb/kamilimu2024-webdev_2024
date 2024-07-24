//Async await
const promise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100)
  setTimeout(() => {
    resolve("Promise 1: " + rand)
  }, rand)
})
const promise2 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100)
  setTimeout(() => {
    resolve("Promise 2: " + rand)
  }, rand)
})
const promise3 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100)
  setTimeout(() => {
    resolve("Promise 3: " + rand)
  }, rand)
})

module.exports = { promise, promise2, promise3 }
