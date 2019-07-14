import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../serves/posts.service';
@Component({
  selector: 'app-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss']
})
export class FixedHeaderComponent implements OnInit {

  search = '';
test: any;
  constructor( protected postsService: PostsService) {
    
  }

  onSearch(){
    this.postsService.postsService(this.search).subscribe( x => {
      this.test = x['kind']; 
     });
  }



  ngOnInit() {
  }

}
