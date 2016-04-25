import {Component} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'

@Component({
  selector: 'my-app',
  template: `
<h1>My First Angular 2 App</h1>
<login-form></login-form>
`,
  directives: [LoginFormComponent]
})
export class AppComponent { }
