import { Usuario } from "./usuario";

export class Mensagem {

    usuarioDestinatario: Usuario;
    usuarioRemetente: Usuario;
    mensagem: string;

    setUsuarioDestinatario (usuario: Usuario) {
        this.usuarioDestinatario = usuario;
    }

    geetUsuarioDestinatario() {
        return this.usuarioDestinatario;
    } 

    setUsuarioRemetente(usuario: Usuario) {
        this.usuarioRemetente = usuario;
    }

    getUsuarioRemetente(usuario: Usuario) {
        return this.usuarioRemetente;
    }

    setMensagem(mensagem: string) {
        this.mensagem = mensagem
    }

    getMensagem() {
        return this.mensagem;
    }
    
}