//criando uma regra de negocio que cria o usuario 
//Note que passamos como parametro da função a tipagem dos dados do objeto

//criando uma nova interface para um array de objetos que deve estar dentro do antiga interface
interface techsInterface{
    title:string,
    experience: string
}

//criando uma função passando a tipagem por uma interface 
interface createdUserInterface{
    nome?: string,      //usamos o "?" para identificar que o nome é uma variavel opcional que pode ou não vir com um resultado
    idade: Number,
    telefone: string
    techs: Array<string | techsInterface>
}

export default function CreateUser({nome = '', idade, telefone, techs } : createdUserInterface) {
    const User = {
        nome,
        idade,
        telefone,
        techs
    }
    return User;
}



// //Criando uma função com a tipagem inline (passando por parametro a tipagem da nossa função)
// export default function CreateUser(Nome:string, Idade:number, Telefone:string){
//     const User={
//         Nome,
//         Idade,
//         Telefone
//     }
//     return User;
// }
