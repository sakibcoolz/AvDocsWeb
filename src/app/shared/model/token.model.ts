export interface tokens {
    exp: number;
    name: string;
    role: string;
    rights: Array<rights>
}


export interface rights {
  servicename: string;
  add: boolean;
  edit: boolean;
  view: boolean;
  delete: boolean;
}
