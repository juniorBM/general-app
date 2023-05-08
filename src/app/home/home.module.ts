import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './containers/login/login.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
        TranslocoModule
    ]
})
export class HomeModule { }
