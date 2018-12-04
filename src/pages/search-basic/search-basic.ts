import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPost } from '../modal-post/modal-post';
import { ModalAdPage } from '../modal-ad/modal-ad';

/**
 * Generated class for the SearchBasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-basic',
  templateUrl: 'search-basic.html',
})
export class SearchBasicPage {

  public search_data = [
    {
      id: 1,
      username: 'Gina Benitez',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/2b9767248069ffd0d2fae6ec4ea410a6/5C9F493B/t51.2885-15/sh0.08/e35/s640x640/44746685_2179518455631394_6191635713267489689_n.jpg',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/2b9767248069ffd0d2fae6ec4ea410a6/5C9F493B/t51.2885-15/sh0.08/e35/s640x640/44746685_2179518455631394_6191635713267489689_n.jpg '
    },
    {
      id: 2,
      username: 'Javier Diaz',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/40a8d1daa4548eed6bc0aa6371073e08/5C91A92E/t51.2885-15/e35/45837919_135542967455547_4916505121359461146_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/40a8d1daa4548eed6bc0aa6371073e08/5C91A92E/t51.2885-15/e35/45837919_135542967455547_4916505121359461146_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com'
    },
    {
      id: 3,
      username: 'Cesia Alvarez',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/c71361910151e26588a1e557ff09ca64/5C97E748/t51.2885-15/e35/45567685_196682007905295_3114362441507234935_n.jpg',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/c71361910151e26588a1e557ff09ca64/5C97E748/t51.2885-15/e35/45567685_196682007905295_3114362441507234935_n.jpg'
    }
  ];
  public search_dataAD = [
    {
      id: 7,
      username: 'MIN: Museo para la Identidad Nacional de Honduras',
      profile_img: 'https://scontent.fgua4-1.fna.fbcdn.net/v/t1.0-9/30262122_10156293782644324_3408875727934476584_n.jpg?_nc_cat=108&_nc_ht=scontent.fgua4-1.fna&oh=d278c3fd403fb326868a0488015baecf&oe=5C99B28B',
      post_img: 'https://scontent.fgua4-1.fna.fbcdn.net/v/t1.0-9/30262122_10156293782644324_3408875727934476584_n.jpg?_nc_cat=108&_nc_ht=scontent.fgua4-1.fna&oh=d278c3fd403fb326868a0488015baecf&oe=5C99B28B'
    }
  ]
  public search_data3 = [

    {
      id: 4,
      username: 'Miriam Lara',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/d2e917ba40379df0f3f1f17876eb2736/5CA68121/t51.2885-15/e35/45397299_2245791542413563_1386697926153278768_n.jpg',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/d2e917ba40379df0f3f1f17876eb2736/5CA68121/t51.2885-15/e35/45397299_2245791542413563_1386697926153278768_n.jpg'
    },
    {
      id: 5,
      username: 'Laura',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/311f06df78ef48c80b04e46767f19249/5C9D825B/t51.2885-15/e35/46296938_511845765994137_1960551978169339483_n.jpg',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/311f06df78ef48c80b04e46767f19249/5C9D825B/t51.2885-15/e35/46296938_511845765994137_1960551978169339483_n.jpg'
    },
    {
      id: 6,
      username: 'Sarahi',
      profile_img: 'https://scontent-mia3-2.cdninstagram.com/vp/38aa6bd1185baa0d28630241523d9385/5C8BA660/t51.2885-15/e35/44907927_172984123659191_2839845616789856029_n.jpg',
      post_img: 'https://scontent-mia3-2.cdninstagram.com/vp/38aa6bd1185baa0d28630241523d9385/5C8BA660/t51.2885-15/e35/44907927_172984123659191_2839845616789856029_n.jpg'
    }
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  pressPhoto(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModal(user_id, username, profile_img, post_img);
  }
  pressPhotoAD(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModalAD(user_id, username, profile_img, post_img);
  }

  presentModal(user_id: number, username: string, profile_img: string, post_img: string) {
    let modal = this.modalCtrl.create(ModalPost,
      {
        user_id: user_id,
        username: username,
        profile_img: profile_img,
        post_img: post_img
      },
      { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }
  presentModalAD(user_id: number, username: string, profile_img: string, post_img: string) {
    let modal2 = this.modalCtrl.create(ModalAdPage,
      {
        user_id: user_id,
        username: username,
        profile_img: profile_img,
        post_img: post_img
      },
      { showBackdrop: true, enableBackdropDismiss: true });
    modal2.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBasicPage');
  }

}
