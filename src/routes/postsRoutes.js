import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus:200

}

import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "./controllers/postsController.js";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");  // pasta de destino
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);  // nome do arquivo
    }
});

const upload = multer({ storage });

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))
    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost );
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", );
}

export default routes;