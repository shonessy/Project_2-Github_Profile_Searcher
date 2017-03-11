import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

import { GithubService } from "../services/github.service";
 
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: "./profile.component.html",
})


export class ProfileComponent implements OnInit {
    user: any;
    repos: any[];
    searchForm: FormGroup;

    constructor(private githubService: GithubService,
                private fb: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
        //this.getUser();
        //this.getRepos();
        this.user = false;
    }

    createForm(): void {
        this.searchForm = this.fb.group({
            userName: "",
        });
    }

    getUser(): void {
        this.githubService.getUser()
            .subscribe(user => {
                console.log(user);
                this.user = user;
            });
    }

    getRepos(): void {
        this.githubService.getRepos()
            .subscribe(repos => {
                console.log("Getting Repos ...");
                this.repos = repos;
                console.log("Number of Repos: ", this.repos.length);
            });
    }


    searchUser(): void {
        console.log("Searching for: ", this.searchForm.controls.userName.value);
        this.githubService.setUserName(this.searchForm.controls.userName.value);
        this.getUser();
        this.getRepos();
    }

}