import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomeAlunoPage } from '../home-aluno/home-aluno';
import { Usuario } from '../../modelos/usuario';
import { LoginPage } from '../login/login';
import { CursoServiceProvider } from '../../providers/curso-service/curso-service';
import { Curso } from '../../modelos/curso';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the CadastrarCalouroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-calouro',
  templateUrl: 'cadastrar-calouro.html',
})
export class CadastrarCalouroPage {


  matriculaUsuario: number;
  nomeUsuario: string;
  senhaUsuario: string;
  idCurso: number;
  dataMatricula: string = new Date().toISOString();

  public cursosAtivos: Curso[];

  usuarioLogado: Usuario;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _usuarioService: UsuarioServiceProvider,
              private _cursoService: CursoServiceProvider,
              private _loadingCtrl: LoadingController,
              private _authService: AuthServiceProvider) {

    this.usuarioLogado = _authService.obtemUsuarioLogado();

    
    let loading = _loadingCtrl.create({
      content : 'Carregando...'
    })

    if (this._authService.isLogged()) {
      this._cursoService.findById(this.usuarioLogado.idCurso)
      .subscribe(
        (cursos) => {
          this.cursosAtivos = cursos;
          console.log(this.cursosAtivos);
          loading.dismiss();
        }
      )
    } else {
      this._cursoService.findAll()
      .subscribe(
        (cursos) => {
          this.cursosAtivos = cursos;
          console.log(this.cursosAtivos);
          loading.dismiss();
        }
      )
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarCalouroPage');
  }

  cadastrarAluno() {

    let usuario = {
      matricula: this.matriculaUsuario,
      nome: this.nomeUsuario,
      senha: this.senhaUsuario,
      dataMatricula: this.dataMatricula,
      idCurso: this.idCurso,
      idTipoUsuario: 1
    };

    console.log(usuario);

    this._usuarioService.cadastrarAluno(usuario)
      .subscribe(
        (usuario: Usuario) => {
          console.log(usuario);
          if(!this.usuarioLogado || this.usuarioLogado.idTipoUsuario == 1) {
            this.navCtrl.setRoot(LoginPage);
          } else {
            this.atualizarPagina();
          }
        },
        (data) => console.log(data)
      );
  }

  atualizarPagina() {
    let paginaAtual: number = this.navCtrl.length() - 1;
    this.navCtrl.push(CadastrarCalouroPage);
    this.navCtrl.remove(paginaAtual);
  }
}
