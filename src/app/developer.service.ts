import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Developer } from './developer';
import { DEVELOPERS } from './mock-developers';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private developersUrl = 'api/developers';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  getDevelopers(): Observable<Developer[]> {
    //this.messageService.add('DeveloperService: fetched developers');
    return this.http.get<Developer[]>(this.developersUrl)
      .pipe(
        tap(_ => this.log('fetched developers')),
        catchError(this.handleError<Developer[]>('getDevelopers', []))
      ); //used to get list of devs thats not in mocked class
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getDeveloper(id: number): Observable<Developer> {
    const url = `${this.developersUrl}/${id}`;
    return this.http.get<Developer>(url).pipe(
      tap(_ => this.log(`fetched developer id=${id}`)),
      catchError(this.handleError<Developer>(`getDeveloper id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`DeveloperService: ${message}`);
  }

  updateDeveloper(developer: Developer): Observable<any> {
    return this.http.put(this.developersUrl, developer, this.httpOptions).pipe(
      tap(_ => this.log(`updated developer id=${developer.id}`)),
      catchError(this.handleError<any>('updateDeveloper'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addDeveloper(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(this.developersUrl, developer, this.httpOptions).pipe(
      tap((newDeveloper: Developer) => this.log(`added developer w/ id=${newDeveloper.id}`)),
      catchError(this.handleError<Developer>('addDeveloper'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteDeveloper(developer: Developer | number): Observable<Developer> {
    const id = typeof developer === 'number' ? developer : developer.id;
    const url = `${this.developersUrl}/${id}`;

    return this.http.delete<Developer>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted developer id=${id}`)),
      catchError(this.handleError<Developer>('deleteDeveloper'))
    );
  }

  /* GET heroes whose name contains search term */
  searchDeveloper(term: string): Observable<Developer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Developer[]>(`${this.developersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found developers matching "${term}"`) :
        this.log(`no developers matching "${term}"`)),
      catchError(this.handleError<Developer[]>('searchDevelopers', []))
    );
  }
}
