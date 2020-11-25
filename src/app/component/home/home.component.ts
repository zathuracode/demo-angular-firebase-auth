import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCartService } from 'src/app/service/auth-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authCartService:AuthCartService,
    public router:Router) { }

  public singOut():void{
    this.authCartService.singOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(e=>{
      this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {
  }

}
