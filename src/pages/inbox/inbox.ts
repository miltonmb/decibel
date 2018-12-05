import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { MessageDetail } from '../message-detail/message-detail';
import { NewMessage } from '../new-message/new-message';

@Component({
  selector: 'page-messages',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  // You can get this data from your API. This is a dumb data for being an example.
  public messages = [
    {
      id: 1,
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/40a8d1daa4548eed6bc0aa6371073e08/5C91A92E/t51.2885-15/e35/45837919_135542967455547_4916505121359461146_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com',
      sender: 'Javi Diaz',
      last_message: 'Estoy muy bien, gracias.',
      time: '3 min'
    }    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  goNewMessage() {
    this.app.getRootNav().push(NewMessage);
  }

  goMessageDetail(sender:string, profile_img:string, last_message:string) {
    this.app.getRootNav().push(MessageDetail, { sender: sender, profile_img: profile_img, last_message: last_message});
  }

}