import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeAlunoPage } from '../home-aluno/home-aluno';
import { HomeCoordenadorPage } from '../home-coordenador/home-coordenador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  entrarAluno() {
    this.navCtrl.push(HomeAlunoPage);  

  }

  entrarCoordenador() {
    this.navCtrl.push(HomeCoordenadorPage);  
  }

}
