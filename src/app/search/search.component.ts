import { Component, OnInit , Input } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';
import { MovieTemplate } from '../model/movieTemplate';
import {Router} from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router ) { }
  Submit(movie_Name) {
  console.log (movie_Name);
        this.router.navigate(['movie', movie_Name]);
    // this.movieobj.fetchmovie(movie_Name);
  }
  ngOnInit() {
  }
}
