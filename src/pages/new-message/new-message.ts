import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-message',
  templateUrl: 'new-message.html',
})
export class NewMessage {

  public user_checked: boolean = false;
  public input_visible: boolean = false;

  public friends = [
    {
      id: 1,
      username: 'Gina Benitez',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/2b9767248069ffd0d2fae6ec4ea410a6/5C9F493B/t51.2885-15/sh0.08/e35/s640x640/44746685_2179518455631394_6191635713267489689_n.jpg',
    },
    {
      id: 2,
      username: 'Javier Diaz',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/40a8d1daa4548eed6bc0aa6371073e08/5C91A92E/t51.2885-15/e35/45837919_135542967455547_4916505121359461146_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com',

    },
    {
      id: 3,
      username: 'Cesia Alvarez',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/c71361910151e26588a1e557ff09ca64/5C97E748/t51.2885-15/e35/45567685_196682007905295_3114362441507234935_n.jpg',

    },
    {
      id: 4,
      username: 'Miriam Lara',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/d2e917ba40379df0f3f1f17876eb2736/5CA68121/t51.2885-15/e35/45397299_2245791542413563_1386697926153278768_n.jpg',
   },
    {
      id: 5,
      username: 'Laura',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/311f06df78ef48c80b04e46767f19249/5C9D825B/t51.2885-15/e35/46296938_511845765994137_1960551978169339483_n.jpg',
   }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkBox(username: string) {
    console.log('Username: ' + username);
    this.input_visible = true;
  }

}