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
    console.log('from items');
    this.categoryId = this.route.snapshot.params.categoryId;
    this.getItems();
    // this.idMarca = this.activeRouter.snapshot.params.idMarca; // Option 1
    // this.id = this.route.snapshot.paramMap.get('id') // Option 2
  }

  getItems(): void {
    this.itemsService.getItems(this.categoryId).subscribe(
      response => {
        this.items = response.data;
        console.log(this.items);
      },
      error => console.log(error.message)
    );
  }

  openDialog(item): void {
    console.log('Item received');
    console.log(item);
    const dialogRef = this.dialog.open(ItemsDetailComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      console.log('chao');
    });
  }

}
