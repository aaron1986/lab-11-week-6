import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Form from "./components/Form"
import Home from "./pages/Home"
import About from "./pages/About"
import Book from "./pages/Book"
import {BrowserRouter, Routes, Route} from "react-router-dom"

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
    <BrowserRouter>
    <div className='container'>

    <header>
    <div className='brand-logo'>
      <h1>Books</h1>
      <p>MongoDb Books Database</p>
      </div>
    </header>

    <Routes>
      <Route 
      path="/" 
      element={
      <Home 
      books={books} 
      setBooks={setBooks} 
      deleteBook={deleteBook} 
      />
      }
      />

      <Route path="/about" element={<About />} />
      <Route path="/book/:id" element={<Book />} />

    </Routes>

    {/* FOOTER */}
    <footer>
    <p id="p-text">App Books Example.</p>
    </footer>
 </div> {/* container div */}
    </BrowserRouter>
  )
}

export default App
