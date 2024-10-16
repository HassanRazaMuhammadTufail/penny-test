import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signup } from '../state/auth.actions';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'app-signup',  
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ObserversModule,MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private snackBar: MatSnackBar) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.store.dispatch(signup(this.signupForm.value));
    } else {
      this.snackBar.open('Please fill out all fields correctly', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
