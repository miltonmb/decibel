import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPremiumPage } from '../search-premium/search-premium';
import { SearchBasicPage } from '../search-basic/search-basic';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  // You can get this data from your API. This is a dumb data for being an example.
  tab1Root = SearchPremiumPage;
  tab2Root =  SearchBasicPage;

  constructor(public navCtrl: NavController,public navParams: NavParams,public modalCtrl: ModalController) {}
 

}