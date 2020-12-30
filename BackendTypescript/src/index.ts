import express from 'express';
import HelloWorld from  './Routes';

const app = express();

//buscando uma rota de um arquivo de Rotas
app.get('/', HelloWorld)

app.listen(3333);