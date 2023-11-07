import { useState } from "react";
import axios from 'axios'

export default function Form({books, setBooks}) {
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        author: "", 
        ISBN: "",  
        imgUrl: "", 
        summary: "",
    });

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    async function submitForm(event) {
        event.preventDefault();
        const API = "http://localhost:8080/books";
        const res = await axios.post(API, formData);
        setBooks([...books, res.data]);
    }

    return (
        <form onSubmit={submitForm}>
            <input name="title" placeholder="title" onChange={handleChange} />
            <input name="year" placeholder="year" onChange={handleChange} />
            <input name="author" placeholder="author" onChange={handleChange} />
            <input name="ISBN" placeholder="ISBN" onChange={handleChange} />
            <input name="imgUrl" placeholder="imgUrl" onChange={handleChange} />
            <input name="summary" placeholder="summary" onChange={handleChange} />
            <button>Add Book</button>
        </form>
    );


}//end of export default function