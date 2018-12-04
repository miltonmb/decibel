import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-ad',
  templateUrl: 'modal-ad.html',
})
export class ModalAdPage {

  public modal_data = {};

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.modal_data = { // Getting data from previous page
      id: this.navParams.get('user_id'),
      username: this.navParams.get('username'),
      profile_img: this.navParams.get('profile_img'),
      post_img: this.navParams.get('post_img')
    };
  }

  ionViewDidLoad() { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
