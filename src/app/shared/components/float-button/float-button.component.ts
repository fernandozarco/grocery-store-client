import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styles: [
  ]
})
export class FloatButtonComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "shopping-basket",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../../../assets/svg/shopping-basket.svg')
    );
  }

  ngOnInit(): void {
  }

}
