import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core'; // <---Questa dovrebbe già essere presente
import {HttpClientModule} from '@angular/common/http'; // <---
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot( {apiKey: 'AIzaSyB6mXdlANO54DFjxLwxFfLJRcbHW8SrdoQ'} ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
