import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'types/post';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() currentPage = { name: 'Home', slug: 'home' };
  currentPageData: Post | undefined;
  isLoading = true;
  apiUrl = environment.apiUrl;

  constructor() {}

  ngOnInit(): void {
    const localStorageData = localStorage.getItem('rxil-current-page');
    if (localStorageData) {
      this.currentPage = JSON.parse(localStorageData);
    }
    this.fetchCurrentPage();
  }

  ngOnChanges() {}

  async fetchCurrentPageResources() {
    console.count('Fetched Page');
    const res = await fetch(
      `${this.apiUrl}/get-page-resources/${this.currentPage.slug}`
    );
    const data = await res.json();
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', data.script);
    scriptTag.setAttribute('id', `${this.currentPage.slug}-resource`);
    document.head.appendChild(scriptTag);
  }

  async fetchCurrentPage() {
    this.isLoading = true;
    const res = await fetch(
      `${this.apiUrl}/get-page-body/${this.currentPage.slug}`
    );
    const data = await res.json();
    // @ts-ignore
    this.currentPageData = {
      post_content: data.content.replace(/\\/g, ''),
    };
    this.fetchCurrentPageResources();
    this.isLoading = false;
  }
}
