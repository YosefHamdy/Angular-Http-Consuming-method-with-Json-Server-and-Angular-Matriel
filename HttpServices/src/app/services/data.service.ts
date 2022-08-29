import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
// base service
export class DataService<T> {
  constructor(
    // make url injectable to pass it from other services
    @Inject(String) private consfigURL: string,
    private http: HttpClient
  ) {}

  get(): Observable<T> {
    return this.http.get<T>(this.consfigURL);
  }
  getById(id: number): Observable<T> {
    return this.http.get<T>(this.consfigURL + `/${id}`);
  }
}
