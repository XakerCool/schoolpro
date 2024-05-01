import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { PolicyPageComponent } from "./policy-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: PolicyPageComponent
  }]), HeaderModule],
  declarations: [PolicyPageComponent],
  exports: [PolicyPageComponent]
})
export class PolicyPageModule {}
