import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html'
})
export class LoginFormComponent {
  model = {};
  email = '';
  password = '';

  onSubmit() { }

  get diagnostic() { return JSON.stringify(this.model); }
}
