import { useState } from "react";
import { useEffect } from "react";
import Card from "../component/Card";

export default function Home() {
    const[books, setBooks] =useState([]);

    useEffect(()=> {
        fetch("http://localhost:3000/api/books")
        .then((response)=> response.json())
        .then((books)=> setBooks(books));
    },[]);

    return(
        <div className="flex flex-row gap-4 justify-center flex-wrap py-4 px-64">
           {books.map((book)=>{
            return(
                <Card key={book.id} id={book.id} title={book.title} cover={book.cover} synopsis={book.sysnopsis}/>
            )
           })}
        </div>
    );
}