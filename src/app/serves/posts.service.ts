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
    
    return  this.httpClient.get<[]>(`https://www.googleapis.com/youtube/v3/search?part=snippet&${search}&type=video&key=AIzaSyBR3UE6tw8MZuYBVORHtV9ODGUIrJ_XYOo`);
    }
}
