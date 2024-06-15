import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversityDetailsPageComponent } from "./university-details-page.component";

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../../header/header.module";
import {KeyValuePipe, NgForOf, NgIf, NgStyle} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: UniversityDetailsPageComponent
  }]), HeaderModule, NgForOf, NgStyle, NgIf, KeyValuePipe],
  declarations: [UniversityDetailsPageComponent],
  exports: [UniversityDetailsPageComponent],
})
export class UniversityDetailsPageModule{}
