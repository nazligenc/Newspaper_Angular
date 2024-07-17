import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [ServiceComponent]
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  isTransitioning = false;
  slides: any[] = [];

  constructor(private serviceComponent: ServiceComponent) {}

  ngOnInit() {
    this.serviceComponent.getTopHeadlines().subscribe(
      data => {
        console.log('Received data:', data);
        this.slides = data.articles.slice(0, 3).map((article: any) => ({
          image: article.urlToImage || '/assets/default-image.jpg',
          edit: "EDITOR'S PICK",
          title: article.title,
          description: article.description,
          author: article.author || 'Unknown Author',
          date: article.publishedAt ? new Date(article.publishedAt).toDateString() : 'Unknown Date'
        }));
        console.log('Slides:', this.slides);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  nextSlide() {
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 500);
  }

  prevSlide() {
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 500);
  }

  goToSlide(index: number) {
    this.isTransitioning = true;
    this.currentIndex = index;
    setTimeout(() => this.isTransitioning = false, 500);
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  onImageError(event: any) {
    event.target.src = '/assets/breakingNews.jpg';
  }
}
