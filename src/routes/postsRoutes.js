import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ dest: "./uploads" , storage: storage})
//linux ou mac apenas usar a linha a cima

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware para analisar corpos de requisições em formato JSON.
    app.get("/posts", listarPosts);
    //Rota para buscar todos os posts 
    app.post("/posts", postarNovoPost)
   //Rota para criar tosos os posts
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
