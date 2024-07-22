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


}
