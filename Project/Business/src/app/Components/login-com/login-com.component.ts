import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service'
import { Account } from '../../Model/AccountModel' 
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login-com',
  templateUrl: './login-com.component.html',
  styleUrls: ['./login-com.component.css']
})

export class LoginComComponent implements OnInit {

  constructor( private service : ServiceService, private router :Router  ) {}
  
  ngOnInit() {}
  username : string ;
  password :string;

  usernamehidden = true;
  passwordhidden= true;

  getValueUserName(event){
    this.username = event.target.value;
    this.usernamehidden =true;
  }

  getValuePassWord(event){
    this.password = event.target.value
    this.passwordhidden = true ;
  }
  
  login(){
    this.service.apiLogin(this.username,this.password,(value)=>{
      if(value != null){
        console.log(value)
        this.router.navigateByUrl("/Modifi/"+value)
      }else{
        console.log("Login failed ")
      }
    })
  }
}
