import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { UserCoursesPageComponent } from "./user-courses.component";
import {NgForOf, NgStyle} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: UserCoursesPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [UserCoursesPageComponent],
  exports: [UserCoursesPageComponent]
})
export class UserCoursesPageModule {}
