import { Component, OnInit , NgZone ,OnChanges , ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import { MovieSearchService } from '../movie-search.service';
import { ActivatedRoute , Params} from '@angular/router';



@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class FavouriteMoviesComponent implements OnInit , OnChanges {
b=[];
delete_res=[];
update_res=[];

  constructor(private moviesearchservice: MovieSearchService , 
  	private route: ActivatedRoute
  	) {}
  ngOnChanges() {
  	this.moviesearchservice.favMovies().subscribe( b => this.b = b);
  }
  

  ngOnInit() {
  	console.log("inside fav");
  	 this.route.params.switchMap((params: Params) =>
     this.moviesearchservice.favMovies()).subscribe( b => this.b = b);
   }
  // favMovie(){
  	
  // }

 deleteMovie(id){
    console.log("this is movie delele controller");
    this.moviesearchservice.deleteMovie(id)
    .subscribe(delete_res => this.delete_res= delete_res);
    //this.moviesearchservice.favMovies().subscribe(b => this.b =b);
  	//this.favMovie();
  }
  updateMovie(m,desc){
    console.log(desc);
    let mo ={ 'imdbID':m.imdbID ,'Title' : m.Title , 'Year' : m.Year , 'Poster' : m.Poster , 'Description' :desc};
    this.moviesearchservice.updateMovie(mo)
    .subscribe(update_res => this.update_res = update_res);
    //this.moviesearchservice.favMovies().subscribe(b => this.b =b);
  	//this.favMovie();
  }

}
