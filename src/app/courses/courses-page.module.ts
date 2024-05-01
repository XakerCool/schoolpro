import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import {NgForOf, NgStyle} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CoursesPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [CoursesPageComponent],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
