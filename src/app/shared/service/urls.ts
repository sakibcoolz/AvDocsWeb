export class urls {
    static host = 'http://203.192.228.106:3579';
    //static host = 'http://10.0.2.102:8000';
    static authenticates = urls.host + '/login';
    static addPrivileges = urls.host + '/privileges/add-privileges';
    static getAllPrivileges = urls.host + '/privileges';
    static addClinic = urls.host + '/addclinic';
    static addEmailAdmin = urls.host+'/addadmin';
    static saveadmin = urls.host+'/saveadmin';
    static sendAllrights = urls.host+'/sendrights';
    static saveRights = urls.host+'/saverights';
    static getClinicRightsId = urls.host+'/getAllRightsbyId'
    static deleteright = urls.host+'/deleteright';
    static gethtml = urls.host+'/html';
}

// username : sakib@gmail.com
// passwd :12345678
