const sessionStorage = window.sessionStorage;

export default class Auth {
    constructor(){}

    isAuthenticated(){
        return !! sessionStorage.getItem('token');
    }

    logout(){
        sessionStorage.removeItem('token');
    }
}