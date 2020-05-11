import { rights } from './../model/token.model';
import * as jwt_decode from 'jwt-decode';
import { tokens } from '../model/token.model';

export class jwtToken {
    static tokenss: tokens;
    static rights: rights[];

    static actualVal(): tokens {
      var token = JSON .parse(localStorage.getItem('currentUser'));
      jwtToken.tokenss = jwt_decode(token);
      return jwt_decode(token);
    }

    static decode(): string {
        //var token = jwtToken.actualVal()
        return this.actualVal().role
    }

    static rolefinder() : Array<rights>{
      return this.actualVal().rights
    }

    static addright(right: string, access: boolean):boolean {
      return this.rolefinder().filter(data => data.servicename === right && data.add === access)[0] === undefined ? false : true;
    }

    static editright(right: string, access: boolean):boolean {
      return this.rolefinder().filter(data => data.servicename === right && data.edit === access)[0] === undefined ? false : true;
    }

    static deleteright(right: string, access: boolean):boolean {
      return this.rolefinder().filter(data => data.servicename === right && data.delete === access)[0] === undefined ? false : true;
    }

    static viewright(right: string, access: boolean):boolean {
      return this.rolefinder().filter(data => data.servicename === right && data.view === access)[0] === undefined ? false : true;
    }
}
