import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AdminPageTestsComponent } from "./admin-page-tests.component";
import {HeaderModule} from "../../../header/header.module";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: AdminPageTestsComponent
  }]), NgForOf, HeaderModule],
  declarations: [AdminPageTestsComponent],
  exports: [AdminPageTestsComponent]
})
export class AdminPageTestsModule {}
