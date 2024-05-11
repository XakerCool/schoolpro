import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderModule} from "../../../../header/header.module";
import { RouterModule } from "@angular/router";
import { CreateTestComponent } from "./create-test.component";
import {NgFor} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: CreateTestComponent
  }]), NgFor, HeaderModule],
  declarations: [CreateTestComponent],
  exports: [CreateTestComponent]
})
export class CreateTestModule {}
