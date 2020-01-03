import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject, observable } from 'rxjs';
import { Account } from '../Model/AccountModel'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  apiRegis(acc: Account) {
    axios.post("http://localhost:3333/register", {
      Account: acc
    },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(function (response) {
        console.log(response.data.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  apiLogin(username: string, password: string, callback) {
    axios.post("http://localhost:3333/api/v1/login", {
      username: username,
      password: password
    },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (response) {
        console.log(response.data.status);
        console.log(response.data.token);
        callback(response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getinfo(token, callback) {
    axios.get("http://localhost:3333/api/v1/account/id",{
      headers: {
        token: token
      }
    }).then(function (response) {
      console.log(response);
      callback(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateinfo(token :string ,username :string , password :string , email:string){
    axios.put("http://localhost:3333/api/v1/account/id",{
      token : token,
      username : username,
      password: password,
      email:email
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
