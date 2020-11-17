import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
var $ : any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    fullName : ""
    gender: ""
    dob = new Date() 
    level = 30
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigateByUrl('/')
  }
  showInfo(){
  
    alert("Name: "+this.fullName + " Giới tính: "+ this.gender + " dob: " + this.dob + " level: "+ this.level);
  }
}
