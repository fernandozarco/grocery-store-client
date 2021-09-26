import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemsDetailComponent } from '../items-detail/items-detail.component';

@Component({
  selector: 'app-items-index',
  templateUrl: './items-index.component.html',
  styles: [
  ]
})
export class ItemsIndexComponent implements OnInit {

  categoryId: number;
  items: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params.categoryId;
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems(this.categoryId).subscribe(
      response => this.items = response.data,
      error => console.log(error.message)
    );
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(ItemsDetailComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed modal');
    });
  }

}
