import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles: any[] = [];
  public sliderArticles: any[] = [];

  constructor(private serviceComponent: ServiceComponent) {}

  ngOnInit() {
    this.serviceComponent.getTopHeadlines().subscribe(data => {
      this.sliderArticles = data.articles.slice(0, 3); // İlk 3 haberi slider için ayırıyoruz
      this.articles = data.articles.slice(3); // Geri kalan haberleri home bileşeninde gösteriyoruz
    });
  }

}
