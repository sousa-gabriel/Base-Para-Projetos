"use strict";
//criando uma regra de negocio que cria o usuario 
//Note que passamos como parametro da função a tipagem dos dados do objeto
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(_a) {
    var _b = _a.nome, nome = _b === void 0 ? '' : _b, idade = _a.idade, telefone = _a.telefone, techs = _a.techs;
    var User = {
        nome: nome,
        idade: idade,
        telefone: telefone,
        techs: techs
    };
    return User;
}
exports.default = CreateUser;
// //Criando uma função com a tipagem inline (passando por parametro a tipagem da nossa função)
// export default function CreateUser(Nome:string, Idade:number, Telefone:string){
//     const User={
//         Nome,
//         Idade,
//         Telefone
//     }
//     return User;
// }
