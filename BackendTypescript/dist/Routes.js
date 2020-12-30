"use strict";
//criando um arquivo de rotas com typscript para verificarmos o envio da tipagem de dados do mesmo
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./service/CreateUser"));
function HelloWorld(request, response) {
    var User = CreateUser_1.default({
        nome: 'Gabriel Rocha',
        idade: 28,
        telefone: '88888888',
        techs: [
            'NodeJs',
            'React Native',
            'React Js',
            {
                title: 'React Native',
                experience: '1 Ano'
            }
        ]
    });
    return response.json({
        message: "Agora o Gabriel Vai ir pro Mundo do Backend!!!",
        Nome: User.nome,
        Idade: User.idade,
        NumeroDeTelefone: User.telefone,
        ExperienciaNaArea: User.techs[3]
    });
}
exports.default = HelloWorld;
