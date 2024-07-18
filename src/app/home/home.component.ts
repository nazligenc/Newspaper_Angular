import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public articles: any[] = [];
  public sliderArticles: any[] = [];
  public politicsArticles: any[] = [];
  public randomPopularPosts: any[] = [];
  public randomRecentNews: any[] = [];

  constructor(private serviceComponent: ServiceComponent) {}

  ngOnInit() {
    // Fetch business news
    this.serviceComponent.getFilteredNews('business').subscribe(
      data => {
        console.log(data); // Check incoming data
        this.sliderArticles = data.articles.slice(0, 3);
        this.articles = data.articles.slice(3);
        this.generateRandomNews(); // Generate random news after fetching data
      },
      error => {
        console.error('Error fetching business news', error);
      }
    );

    // Fetch politics news
    this.serviceComponent.getPoliticsNews().subscribe(
      data => {
        console.log('Politics Data:', data); // Check incoming politics data
        this.politicsArticles = data.articles;
        this.politicsArticles = data.articles.slice(6, 9); // Adjust as per your requirement
      },
      error => {
        console.error('Error fetching politics news', error);
      }
    );
  }

  generateRandomNews() {
    // Generate random indices for recent news and popular posts
    const randomRecentIndices = this.generateRandomIndices(0, this.articles.length - 1, 2); // Select 2 random recent news
    const randomPopularIndices = this.generateRandomIndices(0, this.articles.length - 1, 4); // Select 4 random popular posts

    // Assign random recent news
    this.randomRecentNews = randomRecentIndices.map(index => this.articles[index]);

    // Assign random popular posts
    this.randomPopularPosts = randomPopularIndices.map(index => this.articles[index]);
  }

  generateRandomIndices(min: number, max: number, count: number): number[] {
    const indices: number[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
}
