import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    new Post('Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed hendrerit massa sed erat dapibus pulvinar.Morbi finibus tempor amet.'),
    new Post('Second post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam congue, consectetur libero vitae, varius purus volutpat.'),
    new Post('Troisième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex tellus, suscipit ultricies erat eget, dignissim pretium posuere.')
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
    console.log(this.posts);
  }

  removePost(post: Post) {

    const postIndex = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndex, 1);
    this.emitPosts();
  }
}
