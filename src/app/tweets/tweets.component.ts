import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'aryeh-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets$: Observable<any[]>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    const list$: Observable<string[]> = this.store.select('app', 'list');
    const info$: Observable<any> = this.store.select('app', 'info');
    this.tweets$ = list$
      .withLatestFrom(info$)
      .map(([list, info]: [string[], {}]) => list.map(postId => info[postId]));
  }

}
