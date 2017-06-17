const localStorage = window.localStorage;

export default class Auth {
    constructor(){}

    isAuthenticated(){
        return !! localStorage.getItem('token');
    }

    logout(){
        localStorage.removeItem('token');
    }
}