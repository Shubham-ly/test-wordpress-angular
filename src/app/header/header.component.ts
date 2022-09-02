import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavLinksService } from '../services/nav-links-service/nav-links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks: any;
  currentPageSlug = 'home';

  constructor(private navLinkService: NavLinksService) {}

  ngOnInit(): void {
    const localStorageData = localStorage.getItem('rxil-current-page');
    if (localStorageData) {
      this.currentPageSlug = JSON.parse(localStorageData)?.slug;
    }
    this.getNavLinks();
  }

  getNavLinks(): void {
    this.navLinkService.getNavLinks().subscribe((data) => {
      this.navLinks = data;
      console.log(this.navLinks);
    });
  }
}
