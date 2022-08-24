import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

type NavLink = {
  name: string;
  slug: string;
};

@Injectable({
  providedIn: 'root',
})
export class NavLinksService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getNavLinks(): Observable<NavLink[]> {
    const url = `${this.apiUrl}/get-nav-links`;
    return this.http
      .get<NavLink[]>(url)
      .pipe(catchError(this.handleError<NavLink[]>('get nav links')));
  }
}
