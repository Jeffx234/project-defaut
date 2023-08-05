import { Component } from '@angular/core';
import { increment, decrement, reset } from '../../shared/actions/count.actions';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-count-list',
  templateUrl: './count-list.component.html',
})
export class CountListComponent {
  count$ = this.store.pipe(select('count'));

  constructor(private store: Store<{ count: number }>) {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
