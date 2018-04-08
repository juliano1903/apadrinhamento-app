export class Usuario {

    idUsuario: number;
    matricula: number;
    nome: string;
    emai: string;

    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.emai = email;
    }
}