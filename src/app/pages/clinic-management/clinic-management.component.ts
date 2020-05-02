import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Clinic } from 'src/app/shared/model/clinic.model';
import { ClinicService } from 'src/app/shared/service/clinic.service';



@Component({
  selector: 'app-clinic-management',
  templateUrl: './clinic-management.component.html',
  styleUrls: ['./clinic-management.component.css']
})
export class ClinicManagementComponent implements OnInit {

  regularForm: FormGroup;
  contactList: FormArray;
  clinics: Clinic;

  constructor(private _fb: FormBuilder, private _clinicService: ClinicService) {}

  ngOnInit(): void {
    this.regularForm = this._fb.group({
      clinicName:['', [Validators.required, Validators.minLength(5)]],
      cityname:['', [Validators.required, Validators.minLength(3)]],
      address:['', Validators.required],
      pincode:['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      district:['', Validators.required],
      contactNo:this._fb.array([this.addContact()]),
      country:['India', [Validators.required, Validators.minLength(4)]],
      createdBy: [0, Validators.required],
      concernperson:["", Validators.required]
    })

    this.contactList = this.regularForm.get('contactNo') as FormArray;
  }

  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  get contactFormGroup() {
    return this.regularForm.get('contactNo') as FormArray;
  }

  addContact():FormGroup {
    return this._fb.group({
      telenumber:['', [Validators.required,Validators.minLength(10), Validators.maxLength(14)]]
    })
  }

  addContactButton() :void {
    (<FormArray>this.regularForm.get('contactNo')).push(this.addContact());
  }

  remove(i :number) {
    const control = <FormArray>this.regularForm.get('contactNo');
    control.removeAt(i)
  }


  onSubmit(s: Clinic) {
    console.log(s)
    this._clinicService.addClinic(s).subscribe(data => {
      this.clinics = data
      console.log(this.clinics)
      this.regularForm.disable();
      if (this.clinics.ID) {
        alert(this.clinics.clinicName+"Saved")
      } else {
        alert("Not Save ")
      }
    })

  }

}
