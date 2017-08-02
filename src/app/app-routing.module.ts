import { TweetsResolver } from './tweets.resolver';
import { TweetResolver } from './tweet.resolver';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tweets',
        resolve: {
          tweets: TweetsResolver
        },
        component: TweetsComponent,
        children: [
          {
            path: ':postId',
            component: TweetComponent,
            resolve: {
              tweet: TweetResolver
            }
          }
        ]
      },
      {path: '**', redirectTo: 'tweets'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TweetsResolver,
    TweetResolver
  ]
})
export class AppRoutingModule { }
