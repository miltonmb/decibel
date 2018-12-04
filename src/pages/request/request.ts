import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Solicitud {
  comentario: string;
  fecha:string;
  hora:string
}
@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})

export class RequestPage {
  public solicitud: Solicitud = new Solicitud();
  public modal_data = {};
  public currers;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams,public authserve:AngularFireAuth) {
    this.authserve.authState.subscribe(user=>{
      if(user)
        this.currers = user.email
    })
    this.modal_data = { // Getting data from previous page
      senderiId: this.navParams.get('user_id'),
      senderuserName: this.navParams.get('username'),
      receiverId: this.currers
    };
    
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }
  enviar():void{
    console.log(this.modal_data)
    console.log(this.solicitud.fecha)
    console.log(this.solicitud.hora)
    console.log(this.solicitud.comentario)
  }
}
