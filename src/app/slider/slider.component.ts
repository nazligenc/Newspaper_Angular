import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from "../news-service.service";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NewsServiceService]
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  isTransitioning = false;
  posts: any;
  visiblePosts: any[] = []; // İlk 3 haber için değişken

  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.newsService.getPosts(1,3).subscribe({
      next: (data: any) => {
        console.log(data);
        this.posts = data;
        this.visiblePosts = this.posts.articles.slice(0, 3);
      },
      error: (error: any) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        console.log('API çağrısı tamamlandı.');
      }
    });
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.visiblePosts.length; // Döngüsel geçiş
    setTimeout(() => this.isTransitioning = false, 500); // CSS geçişi ile eşleşen zaman aşımı
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex - 1 + this.visiblePosts.length) % this.visiblePosts.length; // Döngüsel geçiş
    setTimeout(() => this.isTransitioning = false, 500); // CSS geçişi ile eşleşen zaman aşımı
  }

  goToSlide(index: number) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = index % this.visiblePosts.length; // Döngüsel geçiş
    setTimeout(() => this.isTransitioning = false, 500); // CSS geçişi ile eşleşen zaman aşımı
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  onImageError(event: any) {
    event.target.src = '/assets/breakingNews.jpg';
  }
  goToDetail(url: string) {
    window.open(url, '_blank'); // Yeni sekmede URL'yi açar
  }
}
