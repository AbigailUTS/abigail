import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDIj3NYsboTPhS0n7teVESebaaixhvC1GM",
  authDomain: "abigail1-212b2.firebaseapp.com",
  databaseURL: "https://abigail1-212b2-default-rtdb.firebaseio.com",
  projectId: "abigail1-212b2",
  storageBucket: "abigail1-212b2.appspot.com",
  messagingSenderId: "1027455034239",
  appId: "1:1027455034239:web:2ba56fc22de0ec7b6d704a"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
