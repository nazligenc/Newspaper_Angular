import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: []
})
@Injectable({
  providedIn: 'root'
})
export class ServiceComponent implements OnInit {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '676f017549224f488970f1835f9db971';
  public articles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTopHeadlines().subscribe(data => {
      this.articles = data.articles;
      this.articles.forEach(article => {
        if (!article.urlToImage) {
          article.urlToImage = '/assets/default-image.jpg'; // Varsayılan görsel yolunu buraya ayarlayın
        }
      });
    });
  }

  getTopHeadlines(): Observable<any> {
    const usUrl = `${this.apiUrl}?country=us&apiKey=${this.apiKey}`;
    const ukUrl = `${this.apiUrl}?country=uk&apiKey=${this.apiKey}`;
    const trUrl = `${this.apiUrl}?country=tr&apiKey=${this.apiKey}`;

    return forkJoin({
      us: this.http.get(usUrl),
      uk: this.http.get(ukUrl),
      tr: this.http.get(trUrl)
    }).pipe(
      map((results: any) => {
        return {
          articles: [...results.us.articles, ...results.uk.articles, ...results.tr.articles]
        };
      })
    );
  }

  getFilteredNews(category: string, country: string = 'us'): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

