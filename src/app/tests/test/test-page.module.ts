import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TestPageComponent } from "./test-page.component";

import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../header/header.module";
import { NgForOf } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: TestPageComponent
  }]), HeaderModule, NgForOf],
  declarations: [TestPageComponent],
  exports: [TestPageComponent]
})
export class TestPageModule {}
