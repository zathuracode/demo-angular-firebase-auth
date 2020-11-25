
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCartService } from 'src/app/service/auth-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authCartService:AuthCartService,
              public router:Router) { }

  public login():void{
    this.authCartService.login(this.email,this.password)
    .then(()=>{
      this.router.navigate(['/home']);
    })
    .catch(e=>{
      this.msg=e.message;
    });
  }

  ngOnInit(): void {
  }


}
