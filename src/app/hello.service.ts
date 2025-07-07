import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = 'https://playschool-backend-1.onrender.com';

  constructor(private http: HttpClient) {}

  hello(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`, { responseType: 'text' });
  }

  sendMessage(message: string): Observable<any> {
  const payload = { message: message };
  return this.http.post(`${this.apiUrl}/echo`, payload, { responseType: 'text' });
}
}
