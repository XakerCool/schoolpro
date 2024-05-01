import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import { ProfilePageComponent } from "./profile-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: ProfilePageComponent
  }]), HeaderModule],
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {}
