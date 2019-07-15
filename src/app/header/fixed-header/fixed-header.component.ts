import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../serves/posts.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss']
})
export class FixedHeaderComponent implements OnInit {

  search = '';
  items: any
  all = [];
  result=[];
  faSearch = faSearch;
  loading = false;

  constructor( protected postsService: PostsService) {
    
  }

  onSearch(){
    this.postsService.postsService(this.search).subscribe( x => {
      this.loading = true;
      this.all= x,
      this.items = x['items'],
      this.result = x['pageInfo']
 
      
     }, (e)=>{}, ()=>{
       
       
       setTimeout(()=>{

         this.loading = false;
       },3000)
     });
  }



  ngOnInit() {
  }

}
