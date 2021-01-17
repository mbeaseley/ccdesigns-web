import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private server: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  /**
   * Get request
   * @param url
   */
  public async get(url: string): Promise<any> {
    const fullUrl = `${this.server}${url}`;
    return this.http
      .get(fullUrl)
      .toPromise()
      .catch((e: any) => console.error(e));
  }
}
