import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCustumerList(): Observable<any> {
    const url = `${this.url}`
    return this.http.get<any>(url);
  }
}
