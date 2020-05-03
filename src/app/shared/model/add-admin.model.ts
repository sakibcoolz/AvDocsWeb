export interface AddAdmin {
  ID : number;
  firstname : string;
  lastname: string;
  dob: Date;
  rightsNo: number;
  homeaddress1: string;
  homeaddress2: string;
  homeaddress3: string;
  pincode : string;
  cityname: string;
  university: string;
  degreename: string;
  passoutyear: number;
  policyaccept: boolean;
  password: string;
  repassword: string;
  emailid: string;
  contactno: number;
  reffcontno: number;
  uniqueid: number;
  statusflag: string;
  resetFlag: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date;
}
