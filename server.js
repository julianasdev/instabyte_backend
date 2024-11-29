import express from "express";
// Importa o framework Express.js para criar a aplicação web.
import routes from "./src/routes/postsRoutes.js";

const app = express();
// Cria uma instância do Express, que será o núcleo da aplicação.
app.use(express.static("uploads"))
routes(app) 

app.use(express.json());
// Habilita o middleware para analisar corpos de requisições em formato JSON.
// Isso é essencial para receber dados enviados em formato JSON, como em requisições POST.

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto.



