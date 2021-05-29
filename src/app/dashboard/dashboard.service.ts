import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}
  readonly baseUrl = "https://bootcampdiosantander.herokuapp.com/bootcamp";

  async getStocks(): Promise<Stock[]> {
    return await this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
