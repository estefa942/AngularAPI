import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url = 'https://www.googleapis.com/youtube/v3/search'
  private keyApi = 'AIzaSyDWOeeatwZiuR7W-VUfWhAG2qMVRspAI78'
  constructor(private http: HttpClient) { }

  public searchVideo(video:string):Observable<any>{
    let uri = `${this.url}?part=snippet&maxResults=6&q=${video}&key=${this.keyApi}` 
    return this.http.get<any>(uri);
  }

}