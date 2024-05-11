import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {CreatePostPageComponent} from "./create-post-page.component";
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CreatePostPageComponent
  }]), NgForOf],
  declarations: [CreatePostPageComponent],
  exports: [CreatePostPageComponent]
})
export class CreatePostPageModule {}
