import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private server: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  public async get(url: string): Promise<any> {
    const fullUrl = `${this.server}/${url}`;

    try {
      return this.http.get(fullUrl).toPromise();
    } catch (error) {
      console.error(error);
    }
  }
}
