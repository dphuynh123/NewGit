import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { Routes, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-modifi-acc',
  templateUrl: './modifi-acc.component.html',
  styleUrls: ['./modifi-acc.component.css']
})
export class ModifiAccComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = param.get("id")
      console.log(typeof id)
      service.getinfo(id, (response) => {
        this.username = response.data.username
        this.password = response.data.password
        this.email = response.data.email
        this.token = id
      })
    })
  }

  username: string
  password: string
  email: string
  newusername : string
  newpassword:string
  newemail :string
  token : string

  ngOnInit() {
  }

  getvalueusername(event){
    this.newusername = event.target.value
  }

  getvalueemail(event){
    this.newemail = event.target.value
  }

  getValuePassWord(event){
    this.newpassword = event.target.value
  }
  
  modifi(){
    this.service.updateinfo(this.token ,this.newusername,this.newpassword,this.newemail)
  }
}
