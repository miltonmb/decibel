import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fAuth: AngularFireAuth) {
    this.fAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log("The user is logged in!"); 

      }else
      {
        console.log("The user is not logged in!");
      }
      return;
    });
  }
  

}
