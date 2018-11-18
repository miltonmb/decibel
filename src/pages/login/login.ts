import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
  email: string;
  password: string;
}


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, public fAuth: AngularFireAuth) {
  }

  changeToRegister(){
    this.navCtrl.setRoot('RegisterPage')
  }


  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.navCtrl.setRoot(HomePage);
      }

    } catch (err) {
      console.error(err);
    }
  }
}

