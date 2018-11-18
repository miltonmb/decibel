import { ProfilePage } from './../profile/profile';
import { SearchPage } from './../search/search';
import { InboxPage } from './../inbox/inbox';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = ProfilePage;
  tab2Root = SearchPage;
  tab3Root = InboxPage;
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
