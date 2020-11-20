const { request } = require('express');
const express = require('express');
const { uuid, isUuid } = require('uuidv4')
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

const projects = [];

function validadeProjectId(request, response, next){
    const {id} = request.params;
    
    if(!isUuid(id)){
        return response.status(400).json({error: 'invalid project ID'})
    }
    return next();
}

//listando todos os projetos
app.get('/projects', (request, response) => {
    //recebendo o parametro para filtrar
    const {title} = request.query;

    //inserindo o title dentro de uma varival
    const results = title
    //verificando se foi preenchido o title para o filtro 
    //se sim ele mostra apenas os projetos que incluem a descrição do title
    ? projects.filter(project=>project.title.includes(title))
    // se não foi preenchido mostra todos os projetos
    : projects

    return response.json(results);
});

//criando um novo projeto
app.post('/projects', (request, response)=>{
    //pegando o titulo e o dono do produto do corpo da requisição
    const { title, owner } = request.body;

    //criando um novo projeto 
    const project = {id: uuid(), title, owner };
    //inserindo o projeto criado no array de projetos
    projects.push(project);

    //exibir o projeto que foi criado agora
    return response.json(project);
})

//atualizando o projeto selecionado
app.put('/projects/:id', validadeProjectId, (request, response)=>{
    //pegando o id selecionado na rota
    const { id } = request.params;
    //pegando os dados do corpo da requisição
    const { title, owner } = request.body;

    //verificar se contem um projeto com o id selecionado e 
    //retornar a posição do projeto no vetor de projetos 
    const projectIndex = projects.findIndex(project => project.id === id);
    //caso não tenha encontrado o projeto
    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found'})
    }
    //criando uma variavel que recebe os dados do novo projeto para alterar
    const projectChanges ={ id, title, owner};
    //inserindo o projeto alterado no lugar do projeto anterior
    projects[projectIndex] = projectChanges;


    return response.json(projectChanges);
})

app.delete('/projects/:id', validadeProjectId, (request, response)=>{
     //pegando o id selecionado na rota
     const { id } = request.params;
    //verificar se contem um projeto com o id selecionado e 
    //retornar a posição do projeto no vetor de projetos 
    const projectIndex = projects.findIndex(project => project.id === id);
    //caso não tenha encontrado o projeto
    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found'})
    }
    //deletanodo projeto confrome passado pelo usuario
    projects.splice(projectIndex, 1);

    return response.send('Delete project sucess!!')
})

app.listen(3333, ()=>{
    console.log('Server Started!!!')
});
