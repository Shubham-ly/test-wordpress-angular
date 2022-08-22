import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'types/post';

type newsCategoryType = {
  name: string;
  slug: string;
};

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input()
  news!: Post;
  newsCategory: newsCategoryType = {
    name: 'News',
    slug: 'news',
  };

  maximizeVideo: boolean = false;
  datePipe = new DatePipe('en-Us');
  postDate: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newsCategory = this.news.categories[0];
    this.postDate = this.datePipe.transform(
      this.news.post_date,
      'd-MMM-y h:mm a'
    );
  }

  onNewsClick(): void {
    this.router.navigate(['/post/', this.news.ID], {
      state: { post: this.news },
    });
  }

  onVideoClicked(e: any): void {
    console.log('Video clicked');
    e.stopPropagation();
    this.maximizeVideo = !this.maximizeVideo;
  }
}
