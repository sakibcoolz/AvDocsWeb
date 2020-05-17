export interface tokens {
    exp: number;
    name: string;
    role: string;
    rights: Array<rights>;
    user: users
}


export interface users {
  id: number;
  clinicid: number;
}

export interface datarights {
        ID: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        DeletedAt: Date;
        servicename: string;
        add: boolean;
        edit: boolean;
        view: boolean;
        delete: boolean;
        comments: string;
        htmltag: string;
}

export interface rightmaster {
  id: number;
  clinicid: number;
  rightsname: string;
  rightdata: datarights[];
}

export interface clinicright {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date;
  clinicmaster_id: number;
  rightsname: string;
  Rightsservicemapper: string;
}


export interface rights {
  accessname: boolean;
  servicename: string;
  add: boolean;
  edit: boolean;
  view: boolean;
  delete: boolean;
}
