import { useState } from "react";
import axios from 'axios'

export default function Form({books, setBooks, book, setBook }) {
    const [formData, setFormData] = useState(
        book ?? {
            title: "",
            year: "",
            author: "", 
            ISBN: "",  
            imgUrl: "", 
            summary: "",
        }
    );

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    async function addBook(event) {
        event.preventDefault();
        const API = "http://localhost:8080/books";
        const res = await axios.post(API, formData);
        setBooks([...books, res.data]);
    }

    async function updateBook(event) {
        event.preventDefault();
        const API = `http://localhost:8080/books/${book._id}`;
        await axios.put(API, formData);
        setBooks(formData);
    }

    return (
        <form onSubmit={book?.title ? updateBook : addBook}>
            <input name="title" placeholder="title" onChange={handleChange} value={formData.title} />
            <input name="year" placeholder="year" onChange={handleChange} value={formData.year} />
            <input name="author" placeholder="author" onChange={handleChange} value={formData.author} />
            <input name="ISBN" placeholder="ISBN" onChange={handleChange} value={formData.ISBN} />
            <input name="imgUrl" placeholder="imgUrl" onChange={handleChange} value={formData.imgUrl} />
            <input name="summary" placeholder="summary" onChange={handleChange} value={formData.summary} />
            
            <button className="btn-form">Add Book</button>

      {/*       <input name="title" placeholder="title" onChange={handleChange} />
            <input name="year" placeholder="year" onChange={handleChange} />
            <input name="author" placeholder="author" onChange={handleChange} />
            <input name="ISBN" placeholder="ISBN" onChange={handleChange} />
            <input name="imgUrl" placeholder="imgUrl" onChange={handleChange} />
            <input name="summary" placeholder="summary" onChange={handleChange} />
            <button className="btn-form">Add Book</button> */}
        </form>
    );


}//end of export default function