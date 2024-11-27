import conectarAoBanco from "../config/dbConfig.js" 

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente.
// O resultado da conexão é armazenado na constante 'conexao'

export async function getTodosPosts() {
    // Função assíncrona para obter todos os posts do banco de dados.
    const db = conexao.db("imersao_instabytes");
    // Obtém o banco de dados chamado "imersao_instabytes" da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}
