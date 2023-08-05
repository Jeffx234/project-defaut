import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountListContainerComponent } from './count-list.container';

const routes: Routes = [
  {
    path: '',
    component: CountListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountListRoutingModule {}
