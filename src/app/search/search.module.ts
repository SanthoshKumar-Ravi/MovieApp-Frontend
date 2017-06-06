import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { MovieSearchService} from '../movie-search.service';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { AppRoutingModule } from '../app-routing.module';
// const routes: Routes = [
//   { path: 'movie/:movie_Name',  component: MovieComponent }
//  ];

@NgModule({
  declarations: [
    SearchComponent
  ],
    exports: [ RouterModule , SearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    RouterModule,
    AppRoutingModule,
    //[ RouterModule.forRoot(routes) ]
  ],
  providers: [ MovieSearchService ],
  // bootstrap: [AppComponent]
})
export class SearchModule { }
