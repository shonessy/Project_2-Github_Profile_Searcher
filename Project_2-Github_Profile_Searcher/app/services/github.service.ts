import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class GithubService {
    private username: string;
    private baseUrl: string = "https://api.github.com/users/";

    private clientId: string = "988fa26f0a3b41062020";
    private clientSecret: string = "f7ebe4b610d4b00f500312797a734e4292cbc741";
    private verification: string = "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret;

    constructor(private http: Http) {
        console.log("Github Service Ready ...");
    }

    setUserName(newUser: string) {
        this.username = newUser;
    }

    getUser(): Observable<any> {
        let url = this.baseUrl + this.username + this.verification;
        return this.http.get(url)
                        .map((response: Response) => response.json());

    }

    getRepos(): Observable<any[]> {
        let url = this.baseUrl + this.username + "/repos" + this.verification;
        return this.http.get(url)
                        .map((response: Response) => response.json());
    }
}