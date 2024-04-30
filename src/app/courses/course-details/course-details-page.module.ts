import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import {NgForOf, NgStyle} from "@angular/common";

import { CourseDetailsPageComponent } from "./course-details-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: 'courses/course/1',
    component: CourseDetailsPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [CourseDetailsPageComponent],
  exports: [CourseDetailsPageComponent],
})
export class CourseDetailsPageModule {}
