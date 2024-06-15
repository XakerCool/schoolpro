import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversitiesPageComponent } from './universities-page.component';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@NgModule({
    imports: [IonicModule, RouterModule.forChild([{
        path: '',
        component: UniversitiesPageComponent
    }]), HeaderModule, NgForOf, NgStyle, NgIf],
  declarations: [UniversitiesPageComponent],
  exports: [UniversitiesPageComponent],
})
export class UniversitiesPageModule {}
