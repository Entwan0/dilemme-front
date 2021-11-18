import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import {TuiTagModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiButtonModule,
    TuiRootModule,
    TuiTagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
