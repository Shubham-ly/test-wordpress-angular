import { Component, Input, OnInit } from '@angular/core';

type NavLinkType = {
  name: string;
  slug: string;
  sub_links: NavLinkType[];
};

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  @Input() navData!: NavLinkType;
  @Input() isActive!: boolean;

  showSubLinks = false;

  constructor() {}

  ngOnInit(): void {}

  reloadCurrentPage(data: any) {
    localStorage.setItem('rxil-current-page', JSON.stringify(data));
    setTimeout(() => {
      window.location.href = '/' + data.slug;
    }, 0);
  }
}
