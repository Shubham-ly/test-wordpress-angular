import { Component, OnInit } from '@angular/core';
import { NewsCategory } from 'types/news-category';
import { Post } from 'types/post';
import { NewsCategoryService } from '../services/news-category-service/news-category.service';
import { PostService } from '../services/post-service/post.service';

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
  currentPage = 1;
  isLoading = true;

  dropdownOptions = [
    { name: '2022', value: 2022 },
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
  ];

  dropdownValueChanged(event: any) {
    if (this.selectedYear === event.value) return;
    this.selectedYear = event.value;
    this.getNews();
    this.updatePosts();
  }

  setCurrentSelectedPage(page: number) {
    this.currentPage = page;
    console.log(this.currentPage);
    this.getNews();
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
    this.isLoading = true;
    this.postService
      .getPosts({ page: this.currentPage, year: this.selectedYear })
      .subscribe((data) => {
        this.posts = data.posts;
        this.totalPages = data.max_num_pages;
        this.updatePosts();
        this.isLoading = false;
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
      this.filteredPosts = this.posts;
      return;
    }
    this.filteredPosts = this.posts.filter((post) =>
      post.categories.reduce(
        (_, item) => item.id === this.selectedCategory,
        false
      )
    );
  }

  setSelectedCategory(categoryId: number) {
    this.selectedCategory = categoryId;
    this.updatePosts();
  }
}
