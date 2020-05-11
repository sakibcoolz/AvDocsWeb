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
}
