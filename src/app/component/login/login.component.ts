import { Component, Injector } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AuthInfo } from '../../dto/auth.info';
import { Router } from '@angular/router';

@Component({
  selector: "my-app",
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private injector: Injector,private router:Router) {}
  user ={
    id: '',
    password: ''
  }

  login() {
    let authService = this.injector.get(AuthService);

    authService.login(this.user.id,this.user.password).subscribe(
      response => {
        localStorage.setItem("access_token",response.access_token);
        this.router.navigate(["/"]);
      },
      error => {}
    )
  }
}