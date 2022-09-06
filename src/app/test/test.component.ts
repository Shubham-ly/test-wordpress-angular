import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'types/post';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  currentPageSlug = 'home';
  currentPageData: Post | undefined;
  isLoading = true;
  apiUrl = environment.apiUrl;

  constructor() {}

  ngOnInit(): void {
    this.currentPageSlug =
      window.location.pathname === '/' ? '/home' : window.location.pathname;
    console.log(this.currentPageSlug);
    this.fetchCurrentPage();
  }

  ngOnChanges() {}

  async fetchCurrentPageResources() {
    const res = await fetch(
      `${this.apiUrl}/get-page-resources${this.currentPageSlug}`
    );
    const data = await res.json();
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', data.script);
    scriptTag.setAttribute('id', `${this.currentPageSlug}-resource`);
    document.head.appendChild(scriptTag);
  }

  async fetchCurrentPage() {
    this.isLoading = true;
    const res = await fetch(
      `${this.apiUrl}/get-page-body${this.currentPageSlug}`
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
