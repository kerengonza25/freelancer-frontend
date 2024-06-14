import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService<T> {
  constructor(private http: HttpClient) {}

  apiUrl = '';

  getEntities(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getEntity(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  createEntity(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  updateEntity(id: string, entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, entity);
  }

  deleteEntity(id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${id}`);
  }

  searchEntities(query: any): Observable<{ data: T[], meta: any[] }> {
    let params = new HttpParams();

    let keys = Object.keys(query);

    keys.forEach((key) => {
      if (query.hasOwnProperty(key)){
        params = params.set(key, query[key] as string);
      }
    });

    return this.http.get<{ data: T[], meta: any[] }>(`${this.apiUrl}/search`, {
        params,
    });
  }
}
