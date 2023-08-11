import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "../component/Header";


export default function Book(){
    const[book,setBook]= useState();
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/api/books/${id}`)
        .then((response)=> response.json())
        .then((book)=>setBook(book));
    },[id]);


    return(
        <main>
            <div className="flex justify-between items-center">
            {book ? (
                <div className="px-32 py-8 flex flex-col gap-4 justify-center items-center text-center">
                <h2 className="text-2xl font-bold">{book.title}</h2>
                <img src={book.cover} alt={book.title} className="w-[260px] h-[350px] mb-4" />
                <p>{book.synopsis}</p>
                </div>
            ) : (
                "Loading...."
            )
        }
        </div>
        </main>
        

    );
}