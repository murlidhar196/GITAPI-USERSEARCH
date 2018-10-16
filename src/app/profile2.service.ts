import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Profile2Service {

  private username:string; 
  private clientid = 'e32f20852dd67a1843a3';
  private clientsecret = '544c824d9bfc7b52c53a1eb05ea05195385605bd';

  constructor(private http:Http) {

    console.log("Service is ready now!");
    this.username = 'murlidhar196';
    
   }

   getProfileInfo(){

    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));

   }

   getProfileRepos(){

    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));

   }

   findProfile(username:string){

    this.username = username;

   }

}
