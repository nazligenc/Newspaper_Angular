import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../news-service.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  businessNews: any[] = [];
  selectedCategory: string = 'business'; // Default category

  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.fetchNews(this.selectedCategory, 1, 10); // Fetch news for the default category
  }

  fetchNews(category: string, page: number, pageSize: number): void {
    let fetchObservable;

    switch (category) {
      case 'politics':
        fetchObservable = this.newsService.getPoliticsNews(page, pageSize);
        break;
      case 'business':
        fetchObservable = this.newsService.getBusinessNews(page, pageSize);
        break;
      case 'entertainment':
        fetchObservable = this.newsService.getEntertainmentNews(page, pageSize);
        break;
      case 'health':
        fetchObservable = this.newsService.getHealthNews(page, pageSize);
        break;
      case 'science':
        fetchObservable = this.newsService.getScienceNews(page, pageSize);
        break;
      case 'sports':
        fetchObservable = this.newsService.getSportsNews(page, pageSize);
        break;
      case 'technology':
        fetchObservable = this.newsService.getTechnologyNews(page, pageSize);
        break;
      default:
        fetchObservable = this.newsService.getBusinessNews(page, pageSize);
        break;
    }

    fetchObservable.subscribe({
      next: (data: any) => {
        this.businessNews = data.articles;
        console.log(this.businessNews);
      },
      error: (error: any) => {
        console.error('Error fetching news', error);
      },
      complete: () => {
        console.log('API news fetch completed.');
      }
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.fetchNews(category, 1, 10); // Fetch news for the selected category
  }

}
