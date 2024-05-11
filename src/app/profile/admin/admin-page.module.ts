import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../header/header.module";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: AdminPageComponent
  }]), HeaderModule],
  declarations: [AdminPageComponent],
  exports: [AdminPageComponent]
})
export class AdminPageModule {}
