import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Define uma rota GET para a URL "/posts".
   const posts = await getTodosPosts();
   // Chama a função assíncrona para obter todos os posts do banco de dados.
   res.status(200).json(posts);
   // Envia uma resposta HTTP com status 200 (OK) e os dados dos posts em formato JSON.
} 

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.messeg);
        res.status(500).json({"Erro":"Falha na requisição"})
    }   
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } 
    catch(erro) {
        console.error(erro.messeg);
        res.status(500).json({"Erro":"Falha na requisição"})
    }   
}