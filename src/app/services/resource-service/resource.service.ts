import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from 'types/post';

export type ResourceCategory = {
  name: string;
  slug: string;
  id?: number;
};

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getCategories(): Observable<ResourceCategory[]> {
    const url = this.apiUrl + '/get-resource-categories';
    return this.http.get<ResourceCategory[]>(url).pipe(
      tap((data) => {}),
      catchError(this.handleError<ResourceCategory[]>('Get categories'))
    );
  }

  getResources({
    page = 1,
    year = 2022,
  }): Observable<{ resources: Post[]; max_num_pages: number }> {
    const url = this.apiUrl + `/get-rxil-resources/?page=${page}&year=${year}`;
    return this.http.get<Post[]>(url).pipe(
      tap((data) => {}),
      catchError(this.handleError<Post[]>('Get resources'))
    );
  }
}
