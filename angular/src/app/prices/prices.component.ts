import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PricesService } from './prices.service';
import { IPrices } from './prices.interface';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cr-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  providers: [PricesService] 
})
export class PricesComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['symbol', 'price'];
  dataSource: MatTableDataSource<IPrices>;

  constructor(private pricesService: PricesService) { }

  ngOnInit() {
    this.pricesService.getAllPrices().subscribe((pricesResponse) => {
      this.dataSource = new MatTableDataSource(pricesResponse);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}