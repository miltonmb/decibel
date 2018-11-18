import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker'

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;
  constructor(private imagePicker: ImagePicker, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public fAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {

  }

  createProfile() {
    this.fAuth.authState.subscribe(auth => {
      this.afDatabase.object('profile/' + auth.uid).set(this.profile)
        .then(() => {
          this.navCtrl.setRoot('ProfilePage')
        })
    })
  }

  goBackToProfile() {
    let alert = this.alertCtrl.create({
      title: 'Cambios sin guardar',
      message: 'Tienes cambios sin guardar.¿Seguro(a) que quieres cancelar?',
      buttons: [
        {
          text: 'Si',
          role: 'cancel',
          handler: () => {
            this.navCtrl.setRoot('ProfilePage')
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No');
          }
        }
      ]
    });
    alert.present();
  }

  openImagePicker() {
    let options = {
      maximumImagesCount: 1,
    }
    this.imagePicker.getPictures(options)
      .then((results) => {

      })
  }

}
