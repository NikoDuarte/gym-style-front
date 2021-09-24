import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'descripcion', 'cupos', 'opt'];

  @Input() public data!: [{title: string, descripcion: string, cupos: string}] | any

  dataSource !: MatTableDataSource<{title: string, descripcion: string, cupos: string}>

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.dataSource = new MatTableDataSource(this.data)          
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
