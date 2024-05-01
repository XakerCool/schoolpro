import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { BuyCoursesComponent } from "./buy-courses.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: BuyCoursesComponent
  }]), HeaderModule],
  declarations: [BuyCoursesComponent],
  exports: [BuyCoursesComponent]
})
export class BuyCoursesModule {}
