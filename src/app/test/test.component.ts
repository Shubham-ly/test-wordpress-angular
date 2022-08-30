import { Component, OnInit } from '@angular/core';
import { Post } from 'types/post';
import { NavLinksService } from '../services/nav-links-service/nav-links.service';
import { PageService } from '../services/page-service/page.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  navLinks: any;
  currentPage: any;
  currentPageData: Post | undefined;
  isLoading = true;
  apiUrl = environment.apiUrl;

  constructor(
    private navLinkService: NavLinksService,
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    this.getNavLinks();
  }

  getNavLinks(): void {
    this.navLinkService.getNavLinks().subscribe((data) => {
      this.navLinks = data;
      this.currentPage = this.navLinks[0];
      this.fetchCurrentPage();
    });
  }

  async fetchCurrentPageResources() {
    const res = await fetch(
      `${this.apiUrl}/get-page-resources/${this.currentPage.slug}`
    );
    const data = await res.json();
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', data.script);
    scriptTag.setAttribute('id', `${this.currentPage.name}-resource`);
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

  onNavLinkClicked(page: any): void {
    document
      .querySelectorAll(`#${this.currentPage.name}-resource`)
      .forEach((elem) => document.head.removeChild(elem));

    this.currentPage = page;
    this.fetchCurrentPage();
  }
}
