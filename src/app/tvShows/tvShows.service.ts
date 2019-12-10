import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShows } from './tvShows';
@Injectable({
    providedIn: 'root'
})

export class ShowService{
    constructor(private http: HttpClient){}
    ShowsUrl:string = "https://api.themoviedb.org/3/tv/popular?api_key=5f4d55e8ec1912507b6dfa7221bbfc4f&language=en-US&page=1"
    getShows(): Observable<IShows[]>{
        return this.http.get<IShows[]>(this.ShowsUrl)
    }
}