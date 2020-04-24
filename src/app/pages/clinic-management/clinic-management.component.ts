import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-clinic-management',
  templateUrl: './clinic-management.component.html',
  styleUrls: ['./clinic-management.component.css']
})
export class ClinicManagementComponent implements OnInit {
  
  regularForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.regularForm = this._fb.group({
      'clinicName':['', [Validators.required, Validators.minLength(5)]],
      'cityname':['', Validators.required],
      'address':['', Validators.required],
      'pincode':['', Validators.required],
      'district':['', Validators.required],
      'country':['', Validators.required],
      'createdBy':[0]
    })
  }


  onSubmit(s: any) {
    console.log(s)
  }

}
