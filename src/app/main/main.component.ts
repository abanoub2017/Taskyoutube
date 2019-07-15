import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../serves/posts.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() search  ;
  @Input() items: any ;
  faSpinner = faSpinner;

  @Input() loading: boolean;
  // result = this.all.pageInfo.totalResults;
  constructor(
    protected postsService: PostsService
  ) { }

  ngOnInit() {
    console.log(this.search);
  }


}
