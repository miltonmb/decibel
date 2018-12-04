import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBasicPage } from './search-basic';

@NgModule({
  declarations: [
    SearchBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBasicPage),
  ],
})
export class SearchBasicPageModule {}
