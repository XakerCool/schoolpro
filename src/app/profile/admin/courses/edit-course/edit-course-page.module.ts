import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {EditCoursePageComponent} from "./edit-course-page.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../../../header/header.module";
import { NgForOf } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: EditCoursePageComponent
  }]), HeaderModule, NgForOf],
  declarations: [EditCoursePageComponent],
  exports: [EditCoursePageComponent]
})
export class EditCoursePageModule {}
