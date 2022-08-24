import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Post } from 'types/post';
import { PostService } from '../services/post-service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post | null = null;
  refId: string = 'post-styles';
  postUrl: string | null = null;
  isLoading = true;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.post = history.state?.post;
  }

  getPostCss(): void {
    this.postService.getPostCss(this.post?.post_name).subscribe((data) => {
      data.links.forEach((link) => {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('href', link);
        linkTag.setAttribute('id', this.refId);
        document.head.appendChild(linkTag);
      });

      const styleTag = document.createElement('style');
      styleTag.setAttribute('id', this.refId);
      data.inline.forEach((css) => {
        styleTag.innerHTML += css;
      });
      document.head.appendChild(styleTag);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    console.log(this.post);
    if (!this.post) {
      const postId = this.route.snapshot.paramMap.get('id') || '0';
      this.postService
        .getPostById(parseInt(postId))
        .subscribe((data) => (this.post = data));
    }
    this.postUrl = `${environment.baseUrl}/${this.post?.post_name}`;
    this.getPostCss();
  }

  ngOnDestroy(): void {
    document.querySelectorAll(`#${this.refId}`).forEach((element) => {
      document.head.removeChild(element);
    });
    console.log('removed all the post styles');
  }
}
