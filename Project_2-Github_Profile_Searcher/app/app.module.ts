﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ProfileComponent } from "./components/profile.component";

import { GithubService } from "./services/github.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],

    declarations: [
        AppComponent,
        ProfileComponent
    ],

    bootstrap: [AppComponent],

    providers: [GithubService]

})

export class AppModule {}