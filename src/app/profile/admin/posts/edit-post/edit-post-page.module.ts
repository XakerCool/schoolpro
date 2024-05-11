import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {EditPostPageComponent} from "./edit-post-page.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: EditPostPageComponent
  }])],
  declarations: [EditPostPageComponent],
  exports: [EditPostPageComponent]
})
export class EditPostPageModule {}
