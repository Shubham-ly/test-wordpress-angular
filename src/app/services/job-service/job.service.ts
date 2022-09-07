import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobType } from 'types/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.error(error);
      console.log(`Error: ${operation} failed`);
      return of(result as T);
    };
  }

  getJobs({
    page = 1,
  }): Observable<{ jobs: JobType[]; max_num_pages: number }> {
    const url = `${this.apiUrl}/get-job-openings/?page=${page}`;
    return this.http.get<JobType[]>(url).pipe(
      tap((jobs) => {}),
      catchError(this.handleError<JobType[]>('Get jobs'))
    );
  }

  getJobById(id: number): Observable<JobType> {
    const url = `${this.apiUrl}/get-job-by-id/${id}`;
    console.log(url);
    return this.http.get<JobType[]>(url).pipe(
      tap((jobs) => {}),
      catchError(this.handleError<JobType[]>('Get jobs'))
    );
  }
}
