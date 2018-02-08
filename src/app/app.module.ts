import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const firebaseConfig ={
  apiKey: "AIzaSyA9bN9o5tBo3eUTTX_Vetqhl2_4MJMc0xg",
  authDomain: "proej-e5ff7.firebaseapp.com",
  databaseURL: "https://proej-e5ff7.firebaseio.com",
  projectId: "proej-e5ff7",
  storageBucket: "proej-e5ff7.appspot.com",
  messagingSenderId: "918640250726"
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'recipe', component : DetailComponent},
      { path : 'contact-us', component : ContactUsComponent}
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
