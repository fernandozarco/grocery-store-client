import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styles: [
  ]
})
export class SalesReportComponent implements OnInit {

  @Input() transactions: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
