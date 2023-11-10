import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

function App() {
  const [books, setBooks] = useState([]);

  // useEffect
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `https://books-app-xs43.onrender.com/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const check = window.confirm('Are you sure?');
    if (check) {
      const API = `https://books-app-xs43.onrender.com/books/${id}`;
      await axios.delete(API);
      getBooks();
    } else {
      alert('That was close!');
    }
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div id="login-text">
          <LoginButton />
        </div>

<<<<<<< HEAD
     

        <Routes>
          <Route
            path="/"
            element={<Home books={books} setBooks={setBooks} deleteBook={deleteBook} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </div>
      {/* FOOTER */}
      <Footer />
=======
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

      {/* <Link to={'./about'}>About</Link> */}
      <Route path="/about" element={<About />} />
      <Route path="/book/:id" element={<Book />} />

    </Routes>

    {/* FOOTER */}
    <footer>
    <p id="p-text">App Books Example.</p>
    </footer>
 </div> {/* container div */}
>>>>>>> 06e9df54104869ee0a83c2173212420a68334361
    </BrowserRouter>
  );
}

export default App;
