import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    protected httpClient: HttpClient,
  ) { }

  get postsService(): Observable<[]> {
    return  this.httpClient.get<[]>('');
    }
}
