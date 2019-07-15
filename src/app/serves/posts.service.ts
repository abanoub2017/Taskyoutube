import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CodeNode } from 'source-list-map';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    protected httpClient: HttpClient,
  ) { }
   postsService(search): Observable<[]> {
    
    return  this.httpClient.get<[]>(`
    https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=AIzaSyDlPjL8ZMc4334KHwAznQfztE9_SH3Ckw4&maxResults=20`);
    }
}
