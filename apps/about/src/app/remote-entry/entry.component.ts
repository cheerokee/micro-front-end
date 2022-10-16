import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'about-entry',
  templateUrl: './entry.component.html',
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.define();
  }

  define() {
    this.form = this.fb.group({
      username: [ null ],
      password: [ null ]
    });
  }
}
