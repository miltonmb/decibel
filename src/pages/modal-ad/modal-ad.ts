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

  public like_btn = {
    color: 'black',
    icon_name: 'heart-outline'
  };

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

  likeButton() {
    if (this.like_btn.icon_name === 'heart-outline') {
      this.like_btn.icon_name = 'heart';
      this.like_btn.color = 'danger';
    }
    else {
      this.like_btn.icon_name = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }

  goUserProfile(userId: number) {
    console.log("User id: " + userId);
  }

}
