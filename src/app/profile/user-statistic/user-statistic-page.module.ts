import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { UserStatisticPageComponent } from "./user-statistic-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: UserStatisticPageComponent
  }]), HeaderModule],
  declarations: [UserStatisticPageComponent],
  exports: [UserStatisticPageComponent]
})
export class UserStatisticPageModule {}
