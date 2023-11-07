import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

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
          </div>
        )
      })}
    </>
  )
}

export default App
