import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomeAlunoPage } from '../home-aluno/home-aluno';
import { Usuario } from '../../modelos/usuario';
import { LoginPage } from '../login/login';
import { CursoServiceProvider } from '../../providers/curso-service/curso-service';
import { Curso } from '../../modelos/curso';

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


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _usuarioService: UsuarioServiceProvider,
              private _cursoService: CursoServiceProvider,
              private _loadingCtrl: LoadingController) {

    let loading = _loadingCtrl.create({
      content : 'Carregando...'
    })

    this._cursoService.findAll()
    .subscribe(
      (cursos) => {
        this.cursosAtivos = cursos;
        console.log(this.cursosAtivos);
        loading.dismiss();
      }
    )
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
      idCurso: this.idCurso
    };

    console.log(usuario);

    this._usuarioService.cadastrarAluno(usuario)
      .subscribe(
        (usuario: Usuario) => {
          console.log(usuario);
          if(usuario.dataAceite != null) {
            this.navCtrl.setRoot(HomeAlunoPage);
          } else {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        (data) => console.log(data)
      );

    
  }

}
