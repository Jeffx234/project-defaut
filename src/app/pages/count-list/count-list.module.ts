import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountListComponent } from './count-list.component';
import { CountListContainerComponent } from './count-list.container';
import { CountListRoutingModule } from './count-list-routing.module';

@NgModule({
  declarations: [CountListComponent, CountListContainerComponent],
  imports: [CommonModule, CountListRoutingModule],
})
export class CountListModule {}
