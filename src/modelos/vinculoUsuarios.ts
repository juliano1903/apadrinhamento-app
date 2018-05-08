import { Usuario } from "./usuario";

export class VinculoUsuarios {

    usuarioCalouro: Usuario;
    usuarioVeterano: Usuario;
    motivoDesvinculacao: string;

    setVeterano(usuario: Usuario) {
        this.usuarioVeterano = usuario;
    }

    setCalouro(usuario: Usuario) {
        this.usuarioCalouro = usuario;
    }

    getCalouro() {
        return this.usuarioCalouro
    }

    getVeterano() {
        return this.usuarioVeterano;
    }
}