import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Form from "./components/Form"

function App() {
  const [books, setBooks] = useState([]);

  //useEffect
  useEffect(()=>{
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const check = confirm("Are you sure?");
    if (check) {
        const API = `http://localhost:8080/books/${id}`;
        await axios.delete(API);
        getBooks();
    } else {
      alert("That was close!");
    }
  }

  return (
    <>
      <h1>Books</h1>
      <p>MongoDb Books Database</p>

      {books.map((book) => {
        return (
          <div key={book._id}>

            <h2>{book.title}</h2>
            <h2>{book.year}</h2>
            <h2>{book.author}</h2>
            <h2>{book.ISBN}</h2>
            <img src={book.imgUrl}/>
            <h2>{book.summary}</h2>

            {/* delete button */}
            <button onClick={() => deleteBook(book._id)}>Delete Book</button>
          </div>
        )
      })}
      <Form books={books} setBooks={setBooks} />
    </>
  )
}

export default App
