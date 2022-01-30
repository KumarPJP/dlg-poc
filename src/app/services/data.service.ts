import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from '../models/faq'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'assets/data/faqs.json';
  constructor(private http: HttpClient) { }
  getFaqs() {
    return this.http.get<Array<Faq>>(this.dataUrl);
  }
}
