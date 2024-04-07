import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { VerificationPage } from "./verification.page";

import { VerificationRoutingModule } from "./verification-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VerificationRoutingModule
  ],
  exports: [
    VerificationPage
  ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}
