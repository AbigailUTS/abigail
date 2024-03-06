import { Component, OnInit } from '@angular/core';
import { SigninService } from '../service/singin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = "";
  mail: string = "";
  password: string = "";
  passwordCheck: string = "";
  constructor(private singIn: SigninService) { }

  ngOnInit() {
  }
  async signin() {
    if ((this.user, this.mail, this.password, this.passwordCheck)) {
      console.log(this.user, this.mail, this.password, this.passwordCheck);
      await this.singIn.registroAuth(this.password, this.user, this.mail);

    }
  }
}
