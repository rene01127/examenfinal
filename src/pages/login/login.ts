import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import 'firebase/auth';
import { JsonPipe } from '@angular/common';
import { RegistroPage } from '../registro/registro';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  homePg = HomePage;
  email = '';
  pass = '';
  regPg = RegistroPage;

  auth:firebase.auth.Auth;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.auth = firebase.auth();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LogIn(){
//    this.navCtrl.setRoot(this.homePg);
    console.log(this.email, this.pass);
    this.auth.signInWithEmailAndPassword(this.email, this.pass).then(data => {
      console.log(JSON.stringify(data));
      this.navCtrl.setRoot(this.homePg);
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      let alert = this.alertCtrl.create({
        title: "Error",
        subTitle: error.message,
        buttons: ['Ok'],
      });
      alert.present();
    });
  }

  signIn(){
    this.navCtrl.push(this.regPg);
  }
}
