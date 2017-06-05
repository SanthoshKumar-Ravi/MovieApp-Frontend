import { Injectable , OnInit , Component } from '@angular/core';
import { MovieTemplate } from './model/movieTemplate';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieSearchService {
private moviesUrl = 'http://www.omdbapi.com/?t=';
  constructor(private http: Http) { }

  // getMovies(movie_Name){
  //  this.moviesUrl=this.moviesUrl+movie_Name;
  //  console.log(this.moviesUrl);
  // }
//   getMovies(na  me: String): Promise<movie_template> {
//   const url = `${this.moviesUrl}${name}&y=&plot=short&r=json`;
//   console.log(url);
//   return this.http.get(url)
//     .toPromise()
//     .then(response => response.json().data as movie_template)
//     .catch();
// }
getMovies(path: string) {
	console.log("service "+path);
    return this.http
    //  .get('http://www.omdbapi.com/?s=' + path)
      //.map((res) => res.json().Search  || [] );
    .get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=' + path + '&language=en-US&api_key=99a06664dae1d3cb5a5ba58c70a4981e')
    .map((res) => res.json().results  || [] );
      }

      favMovies(){
        console.log("inside fav movie service");
        return this.http.get("http://localhost:8080/movie").map((res) => res.json() || []);
      }
      savemovie(m){
        let encoded_data=JSON.stringify(m);
        console.log("in add service");
        let url = 'http://localhost:8080/movie';
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
return this.http.post(url, encoded_data , options).map((res)=> res.json() || []);
      }
      deleteMovie(id){
        console.log("inside service"+" "+"http://localhost:8080/movie/"+id);
        return this.http.delete("http://localhost:8080/movie/"+id)
        .map((res) => res.json() || [] );

      }
      updateMovie(m){
          let encoded_data=JSON.stringify(m);
        console.log("in add service");
        let url = 'http://localhost:8080/movie/'+m.imdbID;
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
return this.http.put(url, encoded_data , options).map((res)=> res.json() || []);;
      }
}
