import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http : Http
  ) {}

  /**
   * This function makes a get request to the given url
   * @param url the URL to send the request too
   * @return Observable the response observale
   */
  getRequest(url) {
    return this.http.get(url)
      .map(response => response.json());
  }

}
