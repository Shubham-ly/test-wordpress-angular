import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CssData } from 'types/css-data';
import { Post } from 'types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getCss(): Observable<CssData> {
    const url = this.apiUrl + '/get-home';
    return this.http.get<CssData>(url).pipe(
      tap((_) => console.log('Fetched css')),
      catchError(this.handleError<CssData>('get css data'))
    );
  }

  getPosts(page = 1): Observable<{ posts: Post[]; max_num_pages: number }> {
    const url = `${this.apiUrl}/get-all-posts/?page=${page}`;
    return this.http.get<Post[]>(url).pipe(
      tap((post) => console.log('Fetched posts: ', post)),
      catchError(this.handleError<Post[]>('get posts'))
    );
  }

  getPostById(postId: number): Observable<Post> {
    const url = `${this.apiUrl}/get-post-by-id/${postId}`;
    return this.http.get<Post>(url).pipe(
      tap((_) => console.log('Fetched post by id' + postId)),
      catchError(this.handleError<Post>('get post by id'))
    );
  }

  getPostCss(postSlug: string | undefined): Observable<CssData> {
    const url = `${this.apiUrl}/get-post-css/?name=${postSlug}`;
    return this.http.get<CssData>(url).pipe(
      tap((_) => console.info('Fetched css of post: ' + postSlug)),
      catchError(this.handleError<CssData>('Error fetching css of post'))
    );
  }
}
