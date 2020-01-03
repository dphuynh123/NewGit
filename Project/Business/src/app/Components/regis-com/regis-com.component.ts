import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service'
import { Account } from '../../Model/AccountModel' 
@Component({
  selector: 'app-regis-com',
  templateUrl: './regis-com.component.html',
  styleUrls: ['./regis-com.component.css']
})
export class RegisComComponent implements OnInit {

  constructor(private service :ServiceService ) { }

  ngOnInit() {
  }
  
  account : Account = new Account();
  usernamehidden = true;
  passwordhidden= true;
  confirmpasswordhidden = true;
  emailhidden=true

  getValueUserName(event){
    this.account.username = event.target.value;
    this.usernamehidden =true;
  }

  getValueEmail(event){
    this.account.email = event.target.value
    this.passwordhidden = true ;
  }

  getValuePassWord(event){
    this.account.password = event.target.value
    this.passwordhidden = true ;
  }

  getValueConfirmPassWord(event){
    if(event.target.value != this.account.password){
      this.confirmpasswordhidden = false
    }else{
      this.confirmpasswordhidden = true
    }
  }

  selectOption(value){
    console.log(value)
  }

  regis(){
    if(this.account.username != "" && this.account.email != "" && this.account.password != "" && this.confirmpasswordhidden == true){
      this.service.apiRegis(this.account);
    }else{
      console.log("false")
    }
  }

}
