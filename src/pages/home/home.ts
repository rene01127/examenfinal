import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'; 

import { ImagenPage } from '../imagen/imagen';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagenPage = ImagenPage;

  db: firebase.firestore.Firestore;
  user: firebase.User;

  items = [];

  constructor(public navCtrl: NavController, public camera: Camera) {
    this.db = firebase.firestore();
    this.user = firebase.auth().currentUser;

    this.db.collection('arboles').onSnapshot(query => {
      this.items = [];
      query.forEach(imagen => {
        if(imagen.data().user == this.user.uid){
          this.items.push(imagen.data());
        }
      });
    });
  }

  getPicture() {
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
 
    this.camera.getPicture(options)
    .then(imagen => {
      this.navCtrl.push(this.imagenPage, {imagen: 'data:image/jpeg;base64,' + imagen});
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}