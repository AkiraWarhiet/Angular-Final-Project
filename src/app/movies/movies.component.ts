import { Component } from '@angular/core';
import { IMovie } from './movies';
import { MovieService } from './movies.service';
@Component({
    selector: 'pm-movies',
    templateUrl: './movies.component.html'
})
export class MovieListComponent{
    pageTitle: 'Movies';
    movies: IMovie[] = [];
    constructor(private MovieService: MovieService){}
    ngOnInit():void{
        this.movies = this.GetMovies();
    }

    GetMovies():any{
        this.MovieService.getMovies().subscribe(movieObserved => {
            this.movies = movieObserved})
    }

}