import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post-service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getCss();
  }

  getCss(): void {
    this.postService.getCss().subscribe((data) => {
      data.links.forEach((link) => {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('href', link);
        document.head.appendChild(linkTag);
      });

      data.inline.forEach((css) => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
      });
    });
  }
}
