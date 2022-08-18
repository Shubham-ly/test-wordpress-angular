import { Component, Input, OnInit } from '@angular/core';
import { NewsCategory } from 'types/news-category';
import { Post } from 'types/post';
import { NewsCategoryService } from '../services/news-category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  categories: NewsCategory[] = [];
  selectedCategory: number = 1;

  constructor(
    private postService: PostService,
    private newsCategoryService: NewsCategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getNews();
  }

  getNews(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.updatePosts();
    });
  }

  getCategories(): void {
    this.newsCategoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  updatePosts(): void {
    if (this.selectedCategory === 1) {
      this.filteredPosts = this.posts;
      return;
    }
    this.filteredPosts = this.posts.filter((post) =>
      post.categories.reduce(
        (matches, item) => item.id === this.selectedCategory,
        false
      )
    );
  }

  setSelectedCategory(categoryId: number) {
    this.selectedCategory = categoryId;
    this.updatePosts();
  }
}
