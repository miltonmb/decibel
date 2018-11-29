import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPost } from '../modal-post/modal-post';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  // You can get this data from your API. This is a dumb data for being an example.
  public search_data = [
    {
      id: 1,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg'
    },
    {
      id: 2,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg'
    },
    {
      id: 3,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg'
    },
    {
      id: 4,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg'
    },
    {
      id: 5,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg '
    },
    {
      id: 6,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'https://scontent-mia3-1.cdninstagram.com/vp/a6bb6cdf536577d835630966c4547fa2/5CAF82DB/t51.2885-15/sh0.08/e35/s640x640/43415063_306559930169239_5804686911112393392_n.jpg'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  // Get search items from input with your API
  getItems() {

  }

  // Triggers when user pressed a post
  pressPhoto(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModal(user_id, username, profile_img, post_img);
  }

  // Set post modal
  presentModal(user_id: number, username: string, profile_img: string, post_img: string) {
    let modal = this.modalCtrl.create(ModalPost,
      { // Send data to modal
        user_id: user_id,
        username: username,
        profile_img: profile_img,
        post_img: post_img
      }, // This data comes from API!
      { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

}