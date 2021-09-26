import { Component, Input, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styles: [
  ]
})
export class SalesReportComponent implements OnInit {

  // transactions: any[] = [];
  @Input() transactions: any[] = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    // this.getSalesreport();
  }

  // getSalesreport(): void {
  //   this.reportsService.todaySalesReport().subscribe(
  //     response => {
  //       console.log(response);
  //       this.transactions = response.data;
  //     },
  //     error => console.log(error)
  //   );
  // }

}
