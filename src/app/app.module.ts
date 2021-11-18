import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import {TuiTagModule} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TuiButtonModule,
    TuiRootModule,
    TuiTagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
