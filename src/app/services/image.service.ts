import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  // Fetch the logo image from a remote server as a Blob
  // Specifying 'blob' as the responseType to handle binary data
  getLogo(): Observable<Blob> {
    return this.http.get('https://avatars.githubusercontent.com/u/124091983', {
      responseType: 'blob',
    });
  }
}
