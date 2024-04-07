import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { FirstEntry2Component } from "./first-entry-2.component";

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [FirstEntry2Component],
  exports: [FirstEntry2Component]
})
export class FirstEntry2ComponentModule {}
