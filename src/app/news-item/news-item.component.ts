import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'types/post';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input()
  news!: Post;
  newsCategory: { name: string; slug: string } = {
    name: 'News',
    slug: 'news',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newsCategory = this.news.categories[0];
  }

  onNewsClick(): void {
    this.router.navigate(['/post/', this.news.ID], {
      state: { post: this.news },
    });
  }
}
