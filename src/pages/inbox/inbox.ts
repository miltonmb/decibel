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
      profile_img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/15977827_10208405384836413_3477583116947607414_n.jpg?_nc_cat=101&_nc_ht=scontent-mia3-2.xx&oh=e63f98e83859c750d749a65a6be6cdac&oe=5C9DD689',
      sender: 'Milton Martinez',
      last_message: 'Estoy muy bien, gracias.',
      time: '3 min'
    },
    {
      id: 3,
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/c71361910151e26588a1e557ff09ca64/5C97E748/t51.2885-15/e35/45567685_196682007905295_3114362441507234935_n.jpg',
      sender: 'Cesia Alvarez',
      last_message: 'Para cuando tienes libre?',
      time: '1d'
    },
    {
      id: 4,
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/d2e917ba40379df0f3f1f17876eb2736/5CA68121/t51.2885-15/e35/45397299_2245791542413563_1386697926153278768_n.jpg',
      sender: 'Miriam Lara',
      last_message: 'No puedo, tengo un concierto mañana',
      time: '3d'
    },
    {
      id: 5,
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/38aa6bd1185baa0d28630241523d9385/5C8BA660/t51.2885-15/e35/44907927_172984123659191_2839845616789856029_n.jpg',
      sender: 'Sarahi',
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