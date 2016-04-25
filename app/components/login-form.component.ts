import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html'
})
export class LoginFormComponent {
  email = '';
  password = '';

  setEmail(value:string) { this.email = value; }
  setPassword(value:string) { this.password = value; }

  onSubmit() { }

  get diagnostic() { return this.email + ': ' + this.password; }
}
