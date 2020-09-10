import { users, datarights, rightmaster } from './../../../shared/model/token.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';
import { RightsService } from 'src/app/shared/service/rights.service';

@Component({
  selector: 'app-add-rights',
  templateUrl: './add-rights.component.html',
  styleUrls: ['./add-rights.component.css']
})
export class AddRightsComponent implements OnInit {

  formForms: FormGroup;
  submitted: boolean = false;
  disabled: boolean = true;
  datas;
  msg;
  user: users;
  dataright: datarights[];
  editTogg: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private _rightsService: RightsService
  ) {
    this.user = jwtToken.getUser();
  }

  ngOnInit(): void {
    this.formForms = this._fb.group({
      id: [this.user.id],
      clinicid: [this.user.clinicid],
      rightsname: ['', [Validators.required, Validators.maxLength(10)]],
      rightdata : this._fb.array([this.addRights()])
    })
    console.log(this.formForms)
    this.setValue()
  }

  setValue() {
    this._rightsService.allrights().subscribe(data => {
      this.dataright = data;
      if(this.dataright === undefined) {
        console.log('null data')
      } else {
        console.log(this.dataright)
        this.formForms.setControl('rightdata', this.editAddress(data));
      }
    })
  }

  editAddress(add: datarights[]): FormArray {
    const formArray = new FormArray([]);
    console.log(add)
    add.forEach(s => {
      formArray.push(this._fb.group({
      htmltag:s.htmltag,
      servicename:s.servicename,
      view: s.view,
      add: s.add,
      edit: s.edit,
      delete: s.delete,
      comments: s.comments
      }));
    });
    return formArray;
  }

  get contactFormGroup() {
    return this.formForms.get('rightdata') as FormArray;
  }

  addButtonRights() : void{
    console.log(this.formForms);
    (<FormArray>this.formForms.get('rightdata')).push(this.addRights());
  }

  addRights(): FormGroup{
    return this._fb.group({
      htmltag:[{value:'' ,disabled:true}, Validators.required],
      servicename: [{value:'' ,disabled:true}, Validators.required],
      view: [],
      add: [],
      edit: [],
      delete: [],
      comments:[{value:'' ,disabled:true}]
    })
  }

  editClick(i, event) {
    console.log(event.target.value)
    if(!this.editTogg) {
      this.formForms.value['rightdata'][i]['view']=true;
      this.editTogg = false;
    } else {
      this.formForms.value['rightdata'][i]['view']=true;
      this.editTogg = true;
    }
    this.formForms.patchValue(this.formForms.value);
  }

  onSubmit(s: rightmaster) {
    console.log(s)
    this._rightsService.saverights(s).subscribe(data => {
      this.datas = data;
      console.log(this.datas)
      if(this.datas !== undefined){
        this.formForms.disable();
        alert('Rights saved')
      }
    })
  }
}

