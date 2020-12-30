//criando um arquivo de rotas com typscript para verificarmos o envio da tipagem de dados do mesmo

import {Request, Response} from 'express';
import CreateUser from './service/CreateUser';

function HelloWorld(request : Request, response : Response ){
    const User = CreateUser({
        nome: 'Gabriel Rocha', 
        idade: 28 , 
        telefone: '88888888',
        techs:[
            'NodeJs',
            'React Native',
            'React Js',
            {
                title:'React Native',
                experience: '1 Ano'
            }
        ] 
    });
    
    return response.json({
        message:"Agora o Gabriel Vai ir pro Mundo do Backend!!!",
        Nome: User.nome,
        Idade: User.idade,
        NumeroDeTelefone: User.telefone,
        ExperienciaNaArea: User.techs[3]
    })
}

export default HelloWorld;