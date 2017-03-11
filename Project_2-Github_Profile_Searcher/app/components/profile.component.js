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
const forms_1 = require("@angular/forms");
const github_service_1 = require("../services/github.service");
let ProfileComponent = class ProfileComponent {
    constructor(githubService, fb) {
        this.githubService = githubService;
        this.fb = fb;
    }
    ngOnInit() {
        this.createForm();
        //this.getUser();
        //this.getRepos();
        this.user = false;
    }
    createForm() {
        this.searchForm = this.fb.group({
            userName: "",
        });
    }
    getUser() {
        this.githubService.getUser()
            .subscribe(user => {
            console.log(user);
            this.user = user;
        });
    }
    getRepos() {
        this.githubService.getRepos()
            .subscribe(repos => {
            console.log("Getting Repos ...");
            this.repos = repos;
            console.log("Number of Repos: ", this.repos.length);
        });
    }
    searchUser() {
        console.log("Searching for: ", this.searchForm.controls.userName.value);
        this.githubService.setUserName(this.searchForm.controls.userName.value);
        this.getUser();
        this.getRepos();
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: "./profile.component.html",
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService,
        forms_1.FormBuilder])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map