import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../../../../header/header.module";
import { RouterModule } from "@angular/router";
import { EditTestComponent } from "./edit-test.component";
import { NgFor } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: EditTestComponent
  }]), NgFor, HeaderModule],
  declarations: [EditTestComponent],
  exports: [EditTestComponent]
})
export class EditTestModule {}
