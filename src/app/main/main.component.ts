import { Component, OnInit } from '@angular/core';
import PostsService from '../serves/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    protected postsService: PostsService
  ) { }

  ngOnInit() {
    const PostsService = this.postsService.PostsService;
  }

}
