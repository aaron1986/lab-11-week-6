import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <header>
        <nav>
            
        <ul>
        <img src="./src/assets/book_img.png" id="nav-img"/>
        <li><a href="/">Home</a></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        </nav>
        <div className='brand-logo'>
      <h1>Books</h1>
      <p>MongoDb Books Database</p>
      </div>
        </header>
        </>
       
    );
}