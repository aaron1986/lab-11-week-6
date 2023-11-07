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
    <div className='container'>

      <div className='brand-logo'>
      <h1>Books</h1>
      <p>MongoDb Books Database</p>
      </div>
      <div className='section'>
        <div className='books'>
        {books.length > 0 ? (
  books.map((book) => (
    <div key={book._id}>
      <h2 className='book-name'>{book.title}</h2>
      <h2 className='year'>{book.year}</h2>
      <h2 className='author'>{book.author}</h2>
      <h2 className='isbn'>{book.ISBN}</h2>
      <img src={book.imgUrl} />
      <h2 className='summary'>{book.summary}</h2>

      {/* delete button */}
      <button onClick={() => deleteBook(book._id)}>Delete Book</button>
    </div>
  ))
) : (
  <p>No books available.</p>
)}
        </div>{/* end of books div */}
      </div> {/* end of section div */}
    </div> {/* end of container */}
    
    
   
      <Form books={books} setBooks={setBooks} />
    </>
  )
}

export default App
