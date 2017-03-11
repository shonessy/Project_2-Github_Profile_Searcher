import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProfileComponent } from "./components/profile.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "./app.component.html"
})


export class AppComponent {
    title = 'My First Angular 2 App'
}