import { MediasModule } from './medias/medias.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MediasModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
