import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interface/usuario.interface';
import { AuthService } from 'src/app/auth/sevices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 10px;
      
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  //auth!: Auth; 
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
   // this.auth=this.authService.auth; 
    console.log((this.authService.auth)); 
  }
  get auth(){
    return this.authService.auth;
  }
  logout() {
    this.router.navigate(["./auth"])
  }

}
