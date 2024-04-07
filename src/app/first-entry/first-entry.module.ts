import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstEntryPage } from "./first-entry.page";
import { FirstEntryRoutingModule } from "./first-entry-routing.module";

import { FirstEntry1ComponentModule } from "./first-entry-components/first-entry-page-1-component/first-entry-1.module";
import { FirstEntry2ComponentModule } from "./first-entry-components/first-entry-page-2-component/first-entry-2.module";
import { FirstEntry3ComponentModule } from "./first-entry-components/first-entry-3-page-component/first-entry-3.module";
import { FirstEntryHeaderComponentModule} from "./first-entry-components/first-entry-page-header-component/first-entry-header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FirstEntryRoutingModule,
    FirstEntryHeaderComponentModule,
    FirstEntry1ComponentModule,
    FirstEntry2ComponentModule,
    FirstEntry3ComponentModule,
  ],
  declarations: [FirstEntryPage]
})
export class FirstEntryPageModule {}
