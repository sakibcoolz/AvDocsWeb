export class urls {
    static host = 'http://10.0.2.102:8000';
    static authenticates = urls.host + '/login';
    static addPrivileges = urls.host + '/privileges/add-privileges';
    static getAllPrivileges = urls.host + '/privileges';
}