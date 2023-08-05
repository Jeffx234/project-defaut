import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { increment } from '../actions/count.actions';

@Injectable()
export class CountListEffects {
  incrementLog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment),
        tap(() => console.log('Increment action was dispatched!'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
