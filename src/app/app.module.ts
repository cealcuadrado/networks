import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NetworkComponent } from './shared/components/network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
