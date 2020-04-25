export interface Clinic {
    clinicName: string;
      cityname: string;
      address: string;
      pincode:number;
      district: number;
      contactNo: telnumber[];
      country: string;
      createdBy: number;
}

export interface telnumber {
  telenumber : number;
}
