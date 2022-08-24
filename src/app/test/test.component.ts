import { Component, OnInit } from '@angular/core';
import { Post } from 'types/post';
import { NavLinksService } from '../services/nav-links-service/nav-links.service';
import { PageService } from '../services/page-service/page.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  navLinks: any;
  currentPage: any;
  currentPageData: Post | undefined;
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
      console.log(this.navLinks);
      this.currentPage = this.navLinks[0];
      this.fetchCurrentPage();
    });
  }

  fetchCurrentPage(): void {
    this.pageService.getPage(this.currentPage.slug).subscribe((data) => {
      this.currentPageData = data;
    });
  }

  onNavLinkClicked(pageName: any): void {
    this.currentPage = pageName;
    this.fetchCurrentPage();
  }
}
