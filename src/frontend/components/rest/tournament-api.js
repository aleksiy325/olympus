import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class TournamentAPI{
    constructor(){
        this.defaultHeaders = {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'X-CSRFToken': cookies.get('csrftoken'),
        }

    }

    async createUser(username, email, password){
        let url =  window.location.origin + '/api/createuser/'
        let response = await fetch(url, {
            method: 'POST',
            headers: this.defaultHeaders,
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        });
        return await response.json();
    }

    async getToken(username, password){
        let url =  window.location.origin + '/api/token/'
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