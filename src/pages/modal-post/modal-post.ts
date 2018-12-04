import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { RequestPage } from '../request/request';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-modalpost',
  templateUrl: 'modal-post.html',
})
export class ModalPost {

  public like_btn = {
    color: 'black',
    icon_name: 'heart-outline'
  };

  public modal_data = {};

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.modal_data = { // Getting data from previous page
      id: this.navParams.get('user_id'),
      username: this.navParams.get('username'),
      profile_img: this.navParams.get('profile_img'),
      post_img: this.navParams.get('post_img')
    };
  }

  ionViewDidLoad() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  likeButton() {
    if(this.like_btn.icon_name === 'heart-outline') {
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
  
  sendRequest(user_id: number, username: string){
    this.presentModal(user_id,username);
  }
  presentModal(user_id: number, username: string) {
    let modal = this.modalCtrl.create(RequestPage,
      {
        user_id: user_id,
        username: username,
      },
      { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

}