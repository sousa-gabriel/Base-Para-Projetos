import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333'
});

export default api;

//Para que possamos utilizar o localhost  com a porta 333, precisamos execultar o seguinte:
// 1 abrir o emulador com o projeto 
// 2 com o emulador aberto execultar o comando 
// 3 adb reverse tcp:3333 tcp:3333 (responsavel por referenciar a porta do emulador e do pc fisico)