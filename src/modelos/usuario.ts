export class Usuario {

    idUsuario: number;
    matricula: number;
    nome: string;
    emai: string;
    senha: string;
    dataMatricula: string;
    calouro: boolean;
    dsPerfil: string;
    dataAceite: string;
    dataNegativa: string;
    justificativaNegativa: string;

    constructor(matricula, nome, senha, dataMatricula) {
        this.matricula = matricula;
        this.nome = nome;
        this.nome = senha;
        this.dataMatricula = dataMatricula; 
    }

    getDsPerfil() {
        return this.calouro ? 'Calouro' : 'Veterano'; 
    }
}