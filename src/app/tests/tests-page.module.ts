import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestsPageComponent } from "./tests-page.component";

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import {NgForOf, NgStyle} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: TestsPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [TestsPageComponent],
  exports: [TestsPageComponent],
})
export class TestsPageModule {}
