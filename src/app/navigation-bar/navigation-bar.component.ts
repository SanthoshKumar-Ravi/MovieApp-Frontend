import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private moviesearchservice: MovieSearchService) { }
b=[];
delete_res=[];
update_res=[];
  ngOnInit() {
    
  }
  favmovies(){
  	console.log("inside favmovie");
  	this.moviesearchservice.favMovies().subscribe(b => this.b =b);
  	console.log("back too movie");
  }

  deleteMovie(id){
    console.log("this is movie delele controller");
    this.moviesearchservice.deleteMovie(id)
    .subscribe(delete_res => this.delete_res= delete_res);
    this.moviesearchservice.favMovies().subscribe(b => this.b =b);
  }
  updateMovie(m,desc){
    console.log(desc);
    let mo ={ 'imdbID':m.imdbID ,'Title' : m.Title , 'Year' : m.Year , 'Poster' : m.Poster , 'Description' :desc};
    this.moviesearchservice.updateMovie(mo)
    .subscribe(update_res => this.update_res = update_res);
  }

}
