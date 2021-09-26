import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-today-sales-report',
  templateUrl: './today-sales-report.component.html',
  styles: [
  ]
})
export class TodaySalesReportComponent implements OnInit {

  transactions: any[] = [];
  totalSale: number = 0;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getSalesreport();
  }

  getSalesreport(): void {
    this.reportsService.todaySalesReport().subscribe(
      response => {
        console.log(response);
        this.transactions = response.data;
        this.sumTotalSales();
      },
      error => console.log(error)
    );
  }

  sumTotalSales() {
    if (this.transactions.length === 0) return 0;

    this.totalSale = this.transactions.map(item => item.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}
