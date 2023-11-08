import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import Form from "../components/Form"

export default function Book() {
    const [book, setBook] = useState({});

    const params = useParams();

    useEffect(() => {
        getBook();
    }, []);

    async function getBook() {
        const API = `http://localhost:8080/books?_id=${params.id}`;
        const res = await axios.get(API);
        setBook(res.data[0]);
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <h2>{book.year}</h2>
            <h2>{book.author}</h2>
            <h2>{book.ISBN}</h2>
            <img src={book.imgUrl} />
            <p>{book.summary}</p>

            {book.title && <Form book={book} setBook={setBook} />}
        </div>
    )
} {/* end of getBook function */}