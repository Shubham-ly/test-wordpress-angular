import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaqCategoryType, FaqType } from 'types/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getQuestionCategories(): Observable<FaqCategoryType[]> {
    const url = this.apiUrl + '/get-faqs-categories';
    return this.http.get<FaqCategoryType[]>(url).pipe(
      tap((categories) => {}),
      catchError(this.handleError<FaqCategoryType[]>('Get categories'))
    );
  }

  getFaqs(): Observable<FaqType[]> {
    const url = this.apiUrl + '/get-faqs';
    console.log(url);
    return this.http.get<FaqType[]>(url).pipe(
      tap((jobs) => {}),
      catchError(this.handleError<FaqType[]>('Get jobs'))
    );
  }
}
