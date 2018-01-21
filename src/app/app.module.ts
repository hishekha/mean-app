import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './components/page/page.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
