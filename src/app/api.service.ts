import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SiteCategory } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private jsonPath = './assets/data/';

  private jsonHttpheaders = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  getCategories(): Promise<SiteCategory[]> {
    /* Returns the list of categories of websites. */
    return this.http.get<SiteCategory[]>(`${this.jsonPath}categories.json`,
                                          { headers: this.jsonHttpheaders }).toPromise();
  }
}
