import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Injectable()
export class TweetsResolver implements Resolve<Observable<any>> {
    constructor(
        private store: Store<any>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.dispatch({ type: 'TWEETS_LOAD' });
        return this.store.select('app', 'list')
            .filter((list: any[]) => !!list.length)
            .first();
    }
}
