import { Component } from '@angular/core';
import { IShows } from './tvShows';
import { ShowService } from './tvShows.service';
@Component({
    selector: 'pm-tvShows',
    templateUrl: './tvShows.component.html'
})
export class tvShowsListComponent{
    pageTitle: 'Tv-Shows';
    Shows: IShows[] = [];
    constructor(private ShowService: ShowService){}
    ngOnInit():void{
        this.Shows = this.GetShows();
    }

    GetShows():any{
        this.ShowService.getShows().subscribe(ShowsObserved => {
            this.Shows = ShowsObserved})
    }

}