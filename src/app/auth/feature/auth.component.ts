import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NbLayoutModule } from "@nebular/theme";

@Component(
    {   
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss'],
        standalone: true,
        imports: [NbLayoutModule, RouterModule]
    }
)

export class AuthComponent {}