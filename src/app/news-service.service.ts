import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService{
  private apiKey = 'cf175920c7be4780a2707e5871d31572';
  private url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;


  constructor(private http: HttpClient) { }

  getPosts(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }
  getPoliticsNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=politics&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }
  getBusinessNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=business&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  // Entertainment News
  getEntertainmentNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=entertainment&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  // Health News
  getHealthNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=health&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  // Science News
  getScienceNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=science&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  // Sports News
  getSportsNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=sports&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  // Technology News
  getTechnologyNews(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.url}&category=technology&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url);
  }


}
