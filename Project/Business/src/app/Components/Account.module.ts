
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComComponent} from './login-com/login-com.component'
import {RegisComComponent} from './regis-com/regis-com.component';
import { ModifiAccComponent } from './modifi-acc/modifi-acc.component'

const routes :Routes =[
    {path :"Login" , component :LoginComComponent},
    {path:"Regis", component :RegisComComponent},
    {path:"Modifi/:id",component:ModifiAccComponent}
]

@NgModule({
    imports :[
        CommonModule, 
        RouterModule.forChild(routes)
    ],
    declarations: [
      LoginComComponent,
      RegisComComponent,
      ModifiAccComponent
    ]
})
export class AccountModule {}