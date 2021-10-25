import { Component, OnInit } from '@angular/core';
import { PageSettingsModel, row } from '@syncfusion/ej2-angular-grids';
import { data } from '../datasource';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
public data: object[] =[];
//   public pageSettings: PageSettingsModel | undefined;


// ngOnInit(): void {
//   this.data = data;
//     this.pageSettings = { pageSize: 6 };
//   }

public pageSizes: number[] = [5, 10, 15];




  public pageSettings!: Object;

public ngOnInit(): void {
   this.data = data;
    this.pageSettings = { pageCount:10, pageSize: this.pageSizes[0], pageSizes: this.pageSizes};

    };
}
