import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aryeh-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  list;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.route.snapshot.data.tweet;
  }

}
