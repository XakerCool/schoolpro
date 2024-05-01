import {NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../../header/header.module";
import {NgForOf, NgStyle} from "@angular/common";

import { CourseDetailsPageComponent } from "./course-details-page.component";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CourseDetailsPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [CourseDetailsPageComponent],
  exports: [CourseDetailsPageComponent],
})
export class CourseDetailsPageModule {

}
