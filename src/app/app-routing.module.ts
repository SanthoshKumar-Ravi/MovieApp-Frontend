import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: 'movie/:movie_Name',  component: MovieComponent }
 ];
 @NgModule({
 exports: [RouterModule],
 imports: [ RouterModule.forRoot(routes)
	]
 })
 export class AppRoutingModule {}
