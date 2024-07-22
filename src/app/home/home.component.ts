import { Component} from '@angular/core';
import {NewsServiceService} from "../news-service.service";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent{



  constructor(private serviceComponent: NewsServiceService) {}







}
