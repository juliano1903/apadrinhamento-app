import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeAlunoPage } from '../home-aluno/home-aluno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(HomeAlunoPage);  
  }

}
