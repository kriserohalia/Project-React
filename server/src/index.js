import express from "express";
import cors from "cors";
import booksRouter from "./routers/books.js"

export const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

const router = express.Router();
router.use("/books", booksRouter);
app.use("/api", router);

app.listen(3000, () => console.log("server berhasi dijalankan di port 3000"));