import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { FirstEntry3Component } from "./first-entry-3.component";

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [FirstEntry3Component],
  exports: [FirstEntry3Component]
})
export class FirstEntry3ComponentModule {}
