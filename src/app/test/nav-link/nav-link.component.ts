import { Component, Input, OnInit } from '@angular/core';

type NavLinkType = {
  page_name: string;
  page_url: string;
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
}
