import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppComponent } from './app.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { MovieSearchService} from '../movie-search.service';
import { MovieAppMaterialModule } from '../movie-app-material.module';
// import {Router} from '@angular/router';
import { MovieComponent } from './movie.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    MovieComponent
    ],
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule
  ],
  providers: [ MovieSearchService ],
  // bootstrap: [AppComponent]
})
export class MovieModule { }
