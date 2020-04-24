import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  private url = `${environment.apiBaseUrl}/v1`;

  constructor(private http: HttpClient) {
    this.http.get(`${this.url}/finances`).subscribe(data => {
      let arr = data['data'];
      arr.forEach(item => {
        console.log(item)
        item['completed'] = (item['completed'] == "true");
      })
      console.log(arr);
    });
   }

  ngOnInit() {
  }

}
