import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './type/login.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get Username() {
    console.log( this.formGroup.get('username'))
    return this.formGroup.get('username');

  }

  get Password() {
    console.log( this.formGroup.get('password'))
    return this.formGroup.get('password')
  }

  logar() {
    if(this.formGroup.invalid) return;
    if(!this.formGroup.controls['username'].value.trim().length && !this.formGroup.controls['password'].value.trim().length ) return;

    try{
      const payload:Login = {
        username:String(this.formGroup.controls['username'].value.trim()),
        password:String(this.formGroup.controls['passowrd'].value.trim()),
      };

      console.log(payload)
    }catch(error:any){
      console.log(error)
    }
    window.alert('fnucionou')
  }
}
