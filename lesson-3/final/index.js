const { promise, promise2, promise3 } = require("./promises")

//Callback hell
// promise
//   .then((result1) => {

//     otherPromise.then((result2) => {

//         otherOtherPromise.then(() => {

//         })
//     }).catch(() => {

//     })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log("finally") //comes in handy when we're dealing with connections that need to be closed
//   })

async function getResult() {
  try {
    const [resp1, resp2, resp3] = await Promise.all([
      promise,
      promise2,
      promise3,
    ])

    console.log(resp2)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Connection closed")
  }
}

getResult()
