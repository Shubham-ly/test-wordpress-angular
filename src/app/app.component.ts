import { Component, OnInit } from '@angular/core';
import { CssData } from 'types/css-data';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // this.getCss();
  }

  getCss(): void {
    this.postService.getCss().subscribe((data) => {
      data.links.forEach((link) => {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('href', link);
        document.head.appendChild(linkTag);
      });

      const styleTag = document.createElement('style');
      data.inline.forEach((css) => {
        styleTag.innerHTML += css;
      });
      document.head.appendChild(styleTag);
    });
  }
}
