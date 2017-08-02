import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    @Effect()
    loadTweets$: Observable<Action> = this.actions$
        .ofType('TWEETS_LOAD')
        .switchMap(_ => this.http.get<any>('http://localhost:3000/posts')
            .map(tweets => ({ type: 'TWEETS_LOADED', payload: tweets }))
        );
}
