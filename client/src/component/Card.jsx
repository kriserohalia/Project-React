import { Link } from "react-router-dom";

export default function Card(book){
    return(
    <div className="flex justify-between">
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-1 justify-between text-center items-center">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <img src={book.cover} alt={book.title} className="w-[200px] h-[300px] object-cover mb-4 "/>
            <p className="mb-2">{book.synopsis}</p>
            <Link to={`/detail/${book.id}`}>
            <button className="p-2 rounded-3xl bg-gray-700 text-white hover:bg-red-500">Detail</button>
            </Link>
            
        </div>
     </div>
    );
};