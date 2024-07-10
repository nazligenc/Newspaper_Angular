import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'] // Corrected from styleUrl to styleUrls
})
export class SliderComponent {

  currentIndex = 0;
  isTransitioning = true;
  slides:any = [
    {
      image: '/assets/image1.jpg',
      edit: "EDITOR'S PICK",
      title: 'News Needs to Meet Its Audiences Where They Are',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.',
      author: 'Dave Rogers',
      date: 'Jun14'
    },
    {
      image: '/assets/image1.jpg',
      edit: "EDITOR'S PICK",
      title: 'Another News Article',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.',
      author: 'Jane Doe',
      date: 'Jul10'
    },
    {
      image: '/assets/image1.jpg',
      edit: "EDITOR'S PICK",
      title: 'Another News Article',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.',
      author: 'Jane Doe',
      date: 'Jul10'
    }
    // Add more slides as needed
  ];

  nextSlide() {
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 500); // Adjust timeout to match CSS transition
  }

  prevSlide() {
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 500); // Adjust timeout to match CSS transition
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
