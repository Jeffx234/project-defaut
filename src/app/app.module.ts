import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducer } from './shared/reducers/count.reducer';
import { FormsModule } from '@angular/forms';
import { CountListModule } from './pages/count-list/count-list.module';
import { CountListEffects } from './shared/effects/count.effects';
import { CountService } from './shared/services/count.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountListModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreModule.forRoot({ count: countReducer }),
  ],
  providers: [CountListEffects, CountService],
  bootstrap: [AppComponent],
})
export class AppModule { }
