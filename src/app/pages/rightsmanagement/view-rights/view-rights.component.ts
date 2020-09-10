import { Component, OnInit, ViewChild } from '@angular/core';
import { clinicright } from 'src/app/shared/model/token.model';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';
import { RightsService } from 'src/app/shared/service/rights.service';
import {HttpClient} from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-rights',
  templateUrl: './view-rights.component.html',
  styleUrls: ['./view-rights.component.css']
})
export class ViewRightsComponent implements OnInit {

  add: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;
  clinicid: number;
  // clinicright : clinicright[];
  displayedColumns: string[] = ['ID', 'rightsname', 'Edit', 'Delete'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<clinicright>();

  constructor(private _rightsService : RightsService) {
    this.clinicid = jwtToken.getClinicId()
    this.add = jwtToken.addright('rights', true);
    this.edit = jwtToken.editright('rights', true);
    this.delete = jwtToken.deleteright('rights', true);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._rightsService.getrightbyid(this.clinicid).subscribe(data => {
      this.dataSource.data = data;
    })
  }

  deleteRights(id: number) {
    this._rightsService.deletebyid(id).subscribe(data => {
      data = data
    })
    alert('Delete User '+id)
    this._rightsService.getrightbyid(this.clinicid).subscribe(data => {
      this.dataSource.data = data;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


