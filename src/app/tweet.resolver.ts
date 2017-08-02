import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TweetResolver implements Resolve<Observable<any>> {
    constructor(
        private http: HttpClient
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const postId = route.params.postId; // http://localhost:4200/tweet;postId=3
        return this.http.get<any>(`http://localhost:3000/posts/${postId}?_embed=comments`);
    }
}
