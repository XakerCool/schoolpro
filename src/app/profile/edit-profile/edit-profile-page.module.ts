import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { EditProfilePageComponent } from "./edit-profile-page.component";
@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: EditProfilePageComponent
  }]), HeaderModule],
  declarations: [EditProfilePageComponent],
  exports: [EditProfilePageComponent]
})
export class EditProfilePageModule {}
