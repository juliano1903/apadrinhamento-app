import { Usuario } from "./usuario";

export class Interacao {

    idInteracao: number;
    usuarioVeterano: Usuario;
    usuarioCalouro: Usuario;
    data: string;
    titulo:string;
    descricao: string;
    coordenador: boolean;
    dataInteracaoString: string;

    preencher(vinculoUsuario) {
        this.usuarioCalouro = new Usuario(vinculoUsuario.usuarioCalouro.matricula, 
            vinculoUsuario.usuarioCalouro.nome,
            vinculoUsuario.usuarioCalouro.senha,
            vinculoUsuario.usuarioCalouro.dataMatricula);
        this.usuarioCalouro.idUsuario = vinculoUsuario.usuarioCalouro.idUsuario; 
        this.usuarioCalouro.idCurso = vinculoUsuario.usuarioCalouro.idCurso; 
                                                                              
        this.usuarioVeterano = new Usuario(vinculoUsuario.usuarioVeterano.matricula, 
                    vinculoUsuario.usuarioVeterano.nome,
                    vinculoUsuario.usuarioVeterano.senha,
                    vinculoUsuario.usuarioVeterano.dataMatricula);
        this.usuarioVeterano.idUsuario = vinculoUsuario.usuarioVeterano.idUsuario; 
        this.usuarioVeterano.idCurso = vinculoUsuario.usuarioVeterano.idCurso;
        return this;
    };
}
