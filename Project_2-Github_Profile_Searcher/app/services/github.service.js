"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let GithubService = class GithubService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.github.com/users/";
        this.clientId = "988fa26f0a3b41062020";
        this.clientSecret = "f7ebe4b610d4b00f500312797a734e4292cbc741";
        this.verification = "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret;
        console.log("Github Service Ready ...");
    }
    setUserName(newUser) {
        this.username = newUser;
    }
    getUser() {
        let url = this.baseUrl + this.username + this.verification;
        return this.http.get(url)
            .map((response) => response.json());
    }
    getRepos() {
        let url = this.baseUrl + this.username + "/repos" + this.verification;
        return this.http.get(url)
            .map((response) => response.json());
    }
};
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map