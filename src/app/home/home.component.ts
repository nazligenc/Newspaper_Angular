import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from "../news-service.service";


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: `./home.component.html`
})
export class HomeComponent implements OnInit {
  politicsNews: any[] = [];
  businessNews: any[] = [];
  hdata: any[] = [];
  currentPage: number = 1;
  pageSize: number = 25; // Sayfa başına haber sayısı

  constructor(private serviceComponent: NewsServiceService) {}

  ngOnInit(): void {
    this.fetchData(this.currentPage, this.pageSize);
    this.fetchPoliticsNews(this.currentPage, this.pageSize);
    this.fetchBusinessNews(this.currentPage, this.pageSize);
  }

  fetchData(page: number, pageSize: number): void {
    this.serviceComponent.getPosts(page, pageSize).subscribe({
      next: (data: any) => {
        this.hdata = data.articles;
      },
      error: (error: any) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        console.log('API home çağrısı tamamlandı.');
      }
    });
  }
  fetchPoliticsNews(page: number, pageSize: number): void {
    this.serviceComponent.getPoliticsNews(page, pageSize).subscribe({
      next: (data: any) => {
        this.politicsNews = data.articles;
        console.log(this.politicsNews);
      },
      error: (error: any) => {
        console.error('Error fetching politics news', error);
      },
      complete: () => {
        console.log('API politics news fetch completed.');
      }
    });
  }
  fetchBusinessNews(page: number, pageSize: number): void {
    this.serviceComponent.getBusinessNews(page, pageSize).subscribe({
      next: (data: any) => {
        this.businessNews = data.articles;
        console.log(this.businessNews);
      },
      error: (error: any) => {
        console.error('Error fetching business news', error);
      },
      complete: () => {
        console.log('API business news fetch completed.');
      }
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.fetchData(this.currentPage, this.pageSize);

  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData(this.currentPage, this.pageSize);

    }
  }
  goToDetail(url: string) {
    window.open(url, '_blank'); // Yeni sekmede URL'yi açar
  }


}
