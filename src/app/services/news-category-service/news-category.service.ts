import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsCategory } from 'types/news-category';

@Injectable({
  providedIn: 'root',
})
export class NewsCategoryService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getCategories(): Observable<NewsCategory[]> {
    const url = this.apiUrl + '/categories';
    return this.http.get<NewsCategory[]>(url).pipe(
      tap((_) => console.log('Fetched categories')),
      catchError(this.handleError<NewsCategory[]>('Get categories'))
    );
  }
}
