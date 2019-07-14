import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../serves/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() search  ;
  @Input() test: any ;
  constructor(
    protected postsService: PostsService
  ) { }

  ngOnInit() {
    console.log(this.search);
  }


}
