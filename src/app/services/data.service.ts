import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private us: UserService) { }

  apiLink = 'https://woodworks-api.herokuapp.com';

  reqGet(url: string) {
    return this.http.get(
      this.apiLink + url,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Authorization': 'Bearer ' + this.us.getTokenDetails()
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMzAyNjU3LCJleHAiOjE1ODU4OTQ2NTd9.Qzscg2YD4BMOmye7Yj4EKmMMlAV8S3UBkDPU8XnQ5PI'
        }

      }
    );
  }


  reqPost(url, data) {
    return this.http.post<any>(
      this.apiLink + url,
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMzAyNjU3LCJleHAiOjE1ODU4OTQ2NTd9.Qzscg2YD4BMOmye7Yj4EKmMMlAV8S3UBkDPU8XnQ5PI'
        }

      }
    );
  }

  auth(url, body) {
    try {
      return this.http.post<any>(
        this.apiLink + url,
        body,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    } catch (e) {
      console.log(e);
    }
  }



}
