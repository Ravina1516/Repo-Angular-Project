import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import{ RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchloginComponent } from './searchlogin/searchlogin.component';
import { ArtistcollectionComponent } from './artistcollection/artistcollection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    SearchloginComponent,
    ArtistcollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'followers', component:AppComponent},
      {path:'searchlogin', component:SearchloginComponent},
      {path:'artistcollection', component:ArtistcollectionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
