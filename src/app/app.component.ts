import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts: Post[] = [
    new Post('Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed hendrerit massa sed erat dapibus pulvinar.Morbi finibus tempor amet.'),
    new Post('Second post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam congue, consectetur libero vitae, varius purus volutpat.'),
    new Post('Troisième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex tellus, suscipit ultricies erat eget, dignissim pretium posuere.')
  ];

  constructor() { }
}
