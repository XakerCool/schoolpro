import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPageCoursesComponent} from "./admin-page-courses.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../../header/header.module";
import { NgForOf } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: AdminPageCoursesComponent
  }]), HeaderModule, NgForOf],
  declarations: [AdminPageCoursesComponent],
  exports: [AdminPageCoursesComponent]
})
export class AdminPageCoursesModule {}
