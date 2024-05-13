import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateCoursePageComponent } from "./create-course-page.component";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../../../header/header.module";
import {LessonComponent} from "./lesson-component/lesson.component";
import { NgForOf } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CreateCoursePageComponent
  }]), HeaderModule, NgForOf],
    declarations: [CreateCoursePageComponent, LessonComponent],
  exports: [CreateCoursePageComponent]
})
export class CreateCoursePageModule {}
