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
  selectedCategory: number = 0;
  selectedYear = 2022;
  totalPages = 0;
  currentSelectedPage = 1;
  dropdownOptions = [
    { name: '2022', value: 2022 },
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
  ];

  dropdownValueChanged(event: any) {
    this.selectedYear = event.value;
    this.updatePosts();
  }
  constructor(
    private postService: PostService,
    private newsCategoryService: NewsCategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getNews();
  }

  getNews(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.posts;
      this.totalPages = data.max_num_pages;
      this.updatePosts();
    });
  }

  getCategories(): void {
    this.newsCategoryService.getCategories().subscribe(
      (data) =>
        (this.categories = [
          {
            count: data.length,
            id: 0,
            description: 'All posts',
            link: '',
            name: 'All',
            slug: 'all',
          },
          ...data,
        ])
    );
  }

  #checkSelectedPostYear(post: Post): boolean {
    const d = new Date(post.post_date);
    return this.selectedYear === d.getFullYear();
  }

  updatePosts(): void {
    if (this.selectedCategory === 0) {
      this.filteredPosts = this.posts.filter((post) =>
        this.#checkSelectedPostYear(post)
      );
      console.log(this.filteredPosts);
      return;
    }
    this.filteredPosts = this.posts.filter((post) => {
      return (
        this.#checkSelectedPostYear(post) &&
        post.categories.reduce(
          (matches, item) => item.id === this.selectedCategory,
          false
        )
      );
    });
  }

  setSelectedCategory(categoryId: number) {
    this.selectedCategory = categoryId;
    this.updatePosts();
  }
}
