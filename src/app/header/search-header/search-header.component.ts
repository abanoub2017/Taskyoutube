import { Component, OnInit, Input } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {
  @Input() result: any =[] ;
  faFilter = faFilter;
  constructor() { }

  ngOnInit() {
  }

}
