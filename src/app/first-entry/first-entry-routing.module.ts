import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstEntryPage } from './first-entry.page';

const routes: Routes = [
  {
    path: '',
    component: FirstEntryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstEntryRoutingModule {}
