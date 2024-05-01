import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {PostInfoPageComponent} from "./post-info-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: PostInfoPageComponent
  }])],
  declarations: [PostInfoPageComponent],
  exports: [PostInfoPageComponent]
})
export class PostInfoPageModule {}
