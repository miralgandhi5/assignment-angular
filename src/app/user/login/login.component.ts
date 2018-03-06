import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() password: string;
  @Input() emailId: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log('email' + this.emailId + 'pswd:' + this.password);
    this.router.navigate(['home']);
  }
}
