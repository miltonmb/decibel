import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import {Profile} from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile = {} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editProfile(){
    this.navCtrl.setRoot('EditProfilePage')
  }
  logout() {
		this.fAuth.auth.signOut();
		this.navCtrl.setRoot(LoginPage);
	}

}
