import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../../header/header.module";
import { TarifsPageComponent } from "./tarifs-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: TarifsPageComponent
  }]), HeaderModule],
  declarations: [TarifsPageComponent],
  exports: [TarifsPageComponent]
})
export class TarifsPageModule {}
