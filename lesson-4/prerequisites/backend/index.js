const express = require("express")
const pg = require("pg")
const cors = require("cors")

const app = express()
const { Client } = pg

async function main() {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "b9vW8X7A5yUuxkHcQtBhaV",
    database: "webdev",
    port: 5432,
  })

  await client.connect()

  //middleware
  app.use(cors())
  app.use(express.json())

  app.get("/books", async (req, res) => {
    const result = await client.query("select  * from books")
    const books = result.rows
    res.send(books)
  })

  app.get("/books/:title", async (req, res) => {
    const title = req.params.title.toUpperCase();

    const result = await client.query("SELECT * FROM books WHERE title LIKE UPPER($1)", [`${title}%`])
    const books = result.rows
    res.send(books)
  })

  app.post("/books", async (req, res) => {
    try {

      const {title, rating} = req.body
      
      await client.query(`insert into books (title, rating) values ($1, $2)`, [
        title,
        rating,
      ])

      res.send({title: title, rating: rating})
    } catch (err) {
      res.status(500).send(err.message)
    }
  })

  app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`)
  })
}

main()

// const books = [
//   {
//     id: 1,
//     title: "Stillness is Key",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Outliers",
//     rating: 4.7,
//   },
// ]

// app.get("/", (request, res) => {
//   res.send("Testing out endpoints")
// })

// app.get("/books", (request, res) => {
//   res.send(books)
// })

// app.get("/books/:id", (request, res) => {
//   const { id } = request.params

//   const book = books.find((b) => b.id === parseInt(id))

//   if (!book) {
//     res.status(404).send(`Book with id ${id} was not found`)
//   }
//   res.send(book)
// })

// app.post("/books", (req, res) => {
//   const newBook = {
//     id: req.body.id,
//     title: req.body.title,
//     rating: req.body.rating,
//   }

//   books.push(newBook)

//   res.send(books)
// })
