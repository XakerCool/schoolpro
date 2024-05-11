import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPagePostsComponent} from "./admin-page-posts.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../../header/header.module";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: AdminPagePostsComponent
  }]), HeaderModule, NgForOf],
  declarations: [AdminPagePostsComponent],
  exports: [AdminPagePostsComponent]
})
export class AdminPagePostsModule {}
