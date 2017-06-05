import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MovieSearchService } from '../movie-search.service';
import { MovieTemplate } from '../model/movieTemplate';
import {log , catProd} from '../Config';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
   providers: [ MovieSearchService ]
})
export class MovieComponent implements OnInit {
a= [];
movie_array= [];
//m : MovieTemplate;
m=[];
dat:string;
constructor( private moviesearchservice: MovieSearchService,
    private route: ActivatedRoute) { }
    ngOnInit(): void {
    	log.info(' hi this is movie component ');
    this.route.params.switchMap((params: Params) =>
     this.moviesearchservice.getMovies(params['movie_Name'])).subscribe( a => this.a = a);
}
savemovie(id, title, poster, rel_date,desc) {
	let year = rel_date.split['-'];
	console.log(id + ' ' + title + ' ' + poster + ' ' + rel_date);
	 //let m = [id, title, poster, rel_date];
	// this.dat=movie_array.release_date.split('-');
 	
 	//let m={id, title, rel_date,poster};

 	let m ={ 'imdbID':id ,'Title' : title , 'Year' : rel_date , 'Poster' : poster , 'Description' :desc};
 	JSON.stringify(m);
 	console.log(" my m is " + m);
 	this.moviesearchservice.savemovie(m)
 	.subscribe(movie_array => this.movie_array = movie_array);
 	console.log(' hi ');
}
}
