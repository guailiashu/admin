import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User;
  admin = { phone: '', password: '' };
  checked: boolean;
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  login() {

    if (this.admin.phone == 'moon' && this.admin.password == 'moon') {
      this.config.router.navigateByUrl('/home');
    } else {
      alert('登录失败');
    }
  }
}
