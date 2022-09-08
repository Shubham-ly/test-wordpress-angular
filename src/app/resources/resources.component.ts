import { Component, OnInit } from '@angular/core';
import { Post } from 'types/post';
import { ResourceService } from '../services/resource-service/resource.service';
import { ResourceCategoryType } from 'types/resource-category';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  selectedCategory: number = 0;
  isLoading = true;
  selectedYear = 2022;
  currentPage = 1;
  resources: Post[] = [];
  filteredResources: Post[] = [];
  totalPages = 0;

  dropdownOptions = [
    { name: '2022', value: 2022 },
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
  ];

  constructor(private resourceService: ResourceService) {}

  categories: ResourceCategoryType[] = [
    {
      name: 'All',
      slug: 'all',
      id: 0,
    },
  ];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.resourceService.getCategories().subscribe((data) => {
      this.categories = [...this.categories, ...data];
      const hash = location.hash.replace('#', '');
      this.categories.forEach(({ slug, id }) => {
        if (slug === hash) this.selectedCategory = id || 0;
      });
      this.getResources();
    });
  }

  getResources(): void {
    this.isLoading = true;
    this.resourceService
      .getResources({ page: this.currentPage, year: this.selectedYear })
      .subscribe((data) => {
        this.resources = data.resources;
        this.totalPages = data.max_num_pages;
        this.updatePosts();
        this.isLoading = false;
      });
  }

  updatePosts(): void {
    if (this.selectedCategory === 0) {
      this.filteredResources = this.resources;
      return;
    }
    this.filteredResources = this.resources.filter(
      (resource) =>
        // @ts-ignore
        resource.categories.id === this.selectedCategory
    );
  }

  setSelectedCategory(categoryId: number | undefined) {
    this.selectedCategory = categoryId || 0;
    this.updatePosts();
  }

  dropdownValueChanged(event: any) {
    if (this.selectedYear === event.value) return;
    this.selectedYear = event.value;
    this.getResources();
    this.updatePosts();
  }

  setCurrentSelectedPage(page: number) {
    this.currentPage = page;
    this.getResources();
  }
}
