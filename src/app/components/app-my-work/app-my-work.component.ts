import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports : [ CommonModule, SlickCarouselModule],
  templateUrl: './app-my-work.component.html',
  styleUrls: ['./app-my-work.component.scss'],
})
export class AppMyWorkComponent {

  slides= [
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
    {img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
  ];
  
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
  
}

