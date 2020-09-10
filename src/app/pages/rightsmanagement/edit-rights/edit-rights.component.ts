import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-rights',
  templateUrl: './edit-rights.component.html',
  styleUrls: ['./edit-rights.component.css']
})
export class EditRightsComponent implements OnInit {

  pname;
  constructor(
    private _AR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._AR.params.subscribe((data) => {
      this.pname = data["id"];
    });
  }

}
