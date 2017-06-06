import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
const routes: Routes = [
  { path: 'movie/:movie_Name',  component: MovieComponent },
  { path: 'favourite',  component: FavouriteMoviesComponent }
 ];
 @NgModule({
 exports: [RouterModule],
 imports: [ RouterModule.forRoot(routes)
	]
 })
 export class AppRoutingModule {}
