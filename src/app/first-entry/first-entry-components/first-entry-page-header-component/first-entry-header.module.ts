import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { FirstEntryHeaderComponent } from "./first-entry-header.component";

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [FirstEntryHeaderComponent],
  exports: [FirstEntryHeaderComponent]
})
export class FirstEntryHeaderComponentModule {}
