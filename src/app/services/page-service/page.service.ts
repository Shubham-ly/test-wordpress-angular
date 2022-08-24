import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from 'types/post';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getPage(slug: string): Observable<any> {
    const url = `${this.apiUrl}/get-page-by-id/${slug}`;
    return this.http
      .get<Post>(url)
      .pipe(catchError(this.handleError<Post>(`get page ${slug}`)));
  }
}
