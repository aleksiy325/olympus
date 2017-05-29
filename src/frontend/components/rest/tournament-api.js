import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const localStorage = window.localStorage;

export default class TournamentAPI{
    constructor(){
        this.defaultHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': cookies.get('csrftoken'),
        };
    }


  async createGroup(name, priv){
        let url =  window.location.origin + '/api/group/create/';
        let token = localStorage.getItem('token');
        this.defaultHeaders.Authorization = "Token " + token;
        return fetch(url, {
            method: 'POST',
            headers: this.defaultHeaders,
            credentials: "same-origin",
            body: JSON.stringify({
                name: name,
                private: priv
            })
        });
    }

    async createUser(username, email, password){
        let url =  window.location.origin + '/api/createuser/';
        return fetch(url, {
            method: 'POST',
            headers: this.defaultHeaders,
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        });
    }

    async getToken(username, password){
        let url =  window.location.origin + '/api/token/';
        return fetch(url, {
            method: 'POST',
            headers: this.defaultHeaders,
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
    }
}