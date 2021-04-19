import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: any;

  constructor(private service: UserService, private router: Router) { }

  check(): void {
    this.router.navigate(['/customers']);
  }

  ngOnInit(): void {
  }

  doLogin(): void {
    console.log('iniciando sessiòn');
    const resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      console.log(data);
      this.router.navigate(['/customers']);
    });
  }

}
