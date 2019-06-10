import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyAv63iUrb_VwyfBcqSTGENsJ7jxqZgFAUM",
    authDomain: "examen2-7baa2.firebaseapp.com",
    databaseURL: "https://examen2-7baa2.firebaseio.com",
    projectId: "examen2-7baa2",
    storageBucket: "examen2-7baa2.appspot.com",
    messagingSenderId: "120841808996",
    appId: "1:120841808996:web:5fa0f471cd57d9fe"
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

