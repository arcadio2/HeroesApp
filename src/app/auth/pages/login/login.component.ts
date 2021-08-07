import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';
import { Auth } from '../../interface/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  login(){
    //ir al backend
    //un usuario
    this.authService.login().subscribe(resp=>{
      console.log(resp.id);  
      if(resp.id){
        this.router.navigate(['/heroes']);
      }
    }); 
    //
  }

}
