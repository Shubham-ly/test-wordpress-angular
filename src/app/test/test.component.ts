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
    fetch(`${this.apiUrl}/get-page-body/home`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // @ts-ignore
        this.currentPageData = {
          post_content: data.content.replace(/\\/g, ''),
        };
        this.isLoading = false;
      });
  }

  getNavLinks(): void {
    this.navLinkService.getNavLinks().subscribe((data) => {
      this.navLinks = data;
      console.log(this.navLinks);
      this.currentPage = this.navLinks[0];
      // this.fetchCurrentPage();
    });
  }

  fetchCurrentPage(): void {
    this.isLoading = true;
    console.time(`Fetching page: ${this.currentPage.name}`);
    this.pageService.getPage(this.currentPage.slug).subscribe((data) => {
      this.currentPageData = data;
      console.log(data);
      let comments = data?.post_content?.match(/<!--.*?-->/);
      comments =
        comments && comments[0]?.replaceAll('<!--', '')?.replaceAll('-->', '');
      console.log(comments);

      this.isLoading = false;
      console.timeEnd(`Fetching page: ${this.currentPage.name}`);
    });
  }

  onNavLinkClicked(page: any): void {
    this.currentPage = page;
    this.fetchCurrentPage();
  }
}
