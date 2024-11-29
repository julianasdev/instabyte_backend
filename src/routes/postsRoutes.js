import express from "express";
import multer from "multer";// Configura o armazenamento de arquivos utilizando o Multer
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define a pasta "uploads/" como destino para os uploads.
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliza o nome original do arquivo para salvá-lo.
  }
});

const upload = multer({ storage: storage }); // Configuração para Linux/Mac

// Cria uma instância do Express e define as rotas
const routes = (app) => {
  app.use(express.json()); // Habilita o middleware para analisar corpos de requisições em formato JSON.
  app.use(cors(corsOptions))

  app.get("/posts", listarPosts); // Rota para buscar todos os posts
  // A função listarPosts (no controller) provavelmente busca todos os posts do banco de dados e retorna os resultados.

  app.post("/posts", postarNovoPost); // Rota para criar um novo post
  // A função postarNovoPost (no controller) provavelmente recebe os dados do novo post no corpo da requisição e salva no banco de dados.

  app.post("/upload", upload.single("imagem"), uploadImagem); // Rota para upload de imagem
  // O middleware upload.single("imagem") processa o upload do arquivo "imagem".
  // A função uploadImagem (no controller) provavelmente salva a imagem e associa ao post.

  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;