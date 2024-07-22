import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService{
  private apiKey = 'cf175920c7be4780a2707e5871d31572';
  private url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;


  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }



}
