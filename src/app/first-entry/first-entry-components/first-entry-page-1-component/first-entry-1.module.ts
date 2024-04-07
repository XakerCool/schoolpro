import {NgModule, OnInit} from "@angular/core"
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { FirstEntry1Component } from "./first-entry-1.component";

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [FirstEntry1Component],
  exports: [FirstEntry1Component]
})
export class FirstEntry1ComponentModule{
  constructor() {
  }
}
