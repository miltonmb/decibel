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
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      sender: 'candelibas',
      last_message: 'Que tal?',
      time: '6h'
    },
    {
      id: 2,
      profile_img: 'https://avatars2.githubusercontent.com/u/17211796?s=460&v=4',
      sender: 'maxlynch',
      last_message: 'Mañana estaria bien',
      time: '11h'
    },
    {
      id: 3,
      profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
      sender: 'ashleyosama',
      last_message: 'Para cuando tienes libre?',
      time: '1d'
    },
    {
      id: 4,
      profile_img: 'https://avatars0.githubusercontent.com/u/383994?s=460&v=4g',
      sender: 'adam_bradley',
      last_message: 'No puedo, tengo un concierto mañana',
      time: '3d'
    },
    {
      id: 5,
      profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
      sender: 'linus_torvalds',
      last_message: 'Estoy disponible de 7am a 10pm',
      time: '6d'
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