import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

//! TODO: Fixing the news page
// TODO: Creating and linking all the minor pages in wordpress
// TODO: Ways to add new pages in wordpress without showing them up on the nav-links
// TODO: Popup video component in wordpress

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiUrl = environment.apiUrl;
  currentPage = { name: 'Home', slug: 'home' };

  constructor() {}

  ngOnInit(): void {
    this.getThemeStyle();
  }

  async getThemeStyle() {
    const res = await fetch(`${this.apiUrl}/get-styles`);
    const data = await res.json();
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('href', data.link);
    document.head.appendChild(linkTag);
  }

  onNavLinkClicked(data: any) {
    document
      .querySelectorAll(`#${this.currentPage.slug}-resource`)
      .forEach((elem) => document.head.removeChild(elem));

    this.currentPage = data;
  }
}
