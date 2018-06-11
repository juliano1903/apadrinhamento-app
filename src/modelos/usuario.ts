export class Usuario {

    idUsuario: number;
    idCurso: number;
    idTipoUsuario: number;
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
    nickName: string;
    keySalaChatCoordenador: string;

    constructor(matricula, nome, senha, dataMatricula) {
        this.matricula = matricula;
        this.nome = nome;
        this.senha = senha;
        this.dataMatricula = dataMatricula; 
    }

    getDsPerfil() {
        return this.calouro ? 'Calouro' : 'Veterano'; 
    }
}