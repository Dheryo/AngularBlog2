import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  onLike() {
    this.post.loveIts++;
  }

  onDislike() {
    this.post.loveIts--;
  }

  onRemove() {
    this.postsService.removePost(this.post);
  }

}
