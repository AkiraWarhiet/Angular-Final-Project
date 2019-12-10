import { Component } from '@angular/core';
import { MovieService } from '../movies/movies.service';
import { ShowService } from '../tvShows/tvShows.service';
import { IMovie } from '../movies/movies';
import { IShows } from '../tvShows/tvShows';

@Component({
  selector: "pm-welcome",
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  Shows: IShows[] = [];
  movies: IMovie[] = [];
    constructor(private ShowsService: ShowService, private MovieService: MovieService){}
    ngOnInit():void{
        this.Shows = this.GetShows();
        this.movies = this.GetMovies();
    }

    GetShows():any{
        this.ShowsService.getShows().subscribe(ShowsObserved => {
            this.Shows = ShowsObserved})
    }
    GetMovies():any{
      this.MovieService.getMovies().subscribe(movieObserved => {
          this.movies = movieObserved})
  }
}
