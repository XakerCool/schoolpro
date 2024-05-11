import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateCoursePageComponent } from "./create-course-page.component";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../../../header/header.module";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CreateCoursePageComponent
  }]), HeaderModule],
  declarations: [CreateCoursePageComponent],
  exports: [CreateCoursePageComponent]
})
export class CreateCoursePageModule {}
