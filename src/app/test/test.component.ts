import { Component, OnInit } from '@angular/core';
import { NavLinksService } from '../services/nav-links.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  navLinks: any;
  currentPage = 'Home';
  constructor(private navLinkService: NavLinksService) {}

  ngOnInit(): void {
    this.getNavLinks();
  }

  getNavLinks(): void {
    this.navLinkService.getNavLinks().subscribe((data) => {
      this.navLinks = data;
      console.log(this.navLinks);
    });
  }
}
