import axios from "axios"
import { useEffect, useState } from "react"

export default function BooksDisplay() {

    const [books, setBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        async function getBooks() {
            const response = await axios.get(`http://localhost:3000/books/${searchQuery}`)
            setBooks(response.data)
        }

        getBooks()
    }, [searchQuery])


    const [formState, setFormState] = useState({
        title: "",
        rating: 0
    })
    
    const [error, setError] = useState("")

    async function createBook(e) {
        setError("")

        if(!formState.title) {
            setError("Book title is required")
        }

        const submittedRating = parseFloat(formState.rating)

        if(submittedRating < 0 || submittedRating > 5) {
            setError("Rating must be between 0 and 5")
        }

        try {
            const response = await axios.post("http://localhost:3000/books/", {
                title: formState.title,
                rating: submittedRating
            })

            
            setBooks([...books, {title: response.data.title, rating: response.data.rating}])
            
            setError("Succcessfully created book")
            setFormState({
                title: "",
                rating: 0
            })
            
        } catch (err) {
            setError("Failed to Create Book")
        } 

        
    }


    return <div>
        <h1>My Books Display</h1>

        <div>
            <label>Search Books</label>
            <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value)}} />
        </div>
        <ul>
            {books.map(book => {
                return <li key={book.id}>{book.title} - {book.rating} </li>
            })}
        </ul>


        <form>
            <div>
                <label>Title</label>
                <input value={formState.title} onChange={(e) => setFormState({...formState, title: e.target.value})} />
            </div>

            <div>
                <label>Rating</label>
                <input value={formState.rating} onChange={(e) => setFormState({...formState, rating: e.target.value})} />
            </div>

            <button onClick={createBook} type="button">Submit</button>

            <p style={{color: "red"}} >{error}</p>
        </form>

    </div>
}