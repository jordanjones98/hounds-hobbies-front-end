import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable()
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http : HttpClient
  ) {}

  /**
   * This function makes a get request to the given url
   * @param url the URL to send the request too
   * @return Observable the response observale
   */
  getRequest(url) {
    return this.http.get(url)
      .pipe(
        retry(3)
      );
  }

  /**
   * This function makes a POST request to the given URL, with the given data
   * @param url the URL to send the request too
   * @param data the data to send with the API call
   * @return Observable the response observale
   */
  postRequest(url, data) {
    return this.http.post(url, data, this.httpOptions);
  }

}
