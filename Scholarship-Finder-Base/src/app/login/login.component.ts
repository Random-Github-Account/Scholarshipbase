import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : string = '';
  password : string ='';

  constructor(private auth: AuthService, private router: Router){
  }

  ngOnInit(): void{   
  }

  login(){
    if(this.email == ''){
      alert('please enter email');
      return;
    }
    if(this.password == ''){
      alert('please enter password');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email='';
    this.password ='';
  }
}
