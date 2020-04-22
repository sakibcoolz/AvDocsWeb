import * as jwt_decode from 'jwt-decode';
import { tokens } from '../model/token.model';

export class jwtToken {
    static tokenss: tokens;
    
    static  decode(): string {
        var token = JSON.parse(localStorage.getItem('currentUser'));
        this.tokenss = jwt_decode(token);
        return this.tokenss.role
    }
}