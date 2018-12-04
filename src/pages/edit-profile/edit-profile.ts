import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { ModalPaymentPage } from '../modal-payment/modal-payment';
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
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public fAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public modalCtrl: ModalController) {
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

  pagarPremium() {
    this.presentModal();
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPaymentPage,
      { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }
  
}
