import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private moviesearchservice: MovieSearchService , private router: Router) { }
b=[];
  ngOnInit() {
    
  }
  favmovies(){
  	 this.router.navigate(['favourite']);
    }

 
}
