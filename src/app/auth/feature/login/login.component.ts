import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NbButtonModule, NbCardModule, NbInputModule } from "@nebular/theme";
import { Store } from "@ngrx/store";
import * as authActions from 'src/app/auth/data-access/store/auth.actions'

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    standalone: true,
    imports: [NbCardModule, NbInputModule, NbButtonModule, FormsModule, ReactiveFormsModule]
})

export class LoginComponent{

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router, private store: Store) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

    onSubmit() {
        const { email, password } = this.loginForm.value;
    
        this.afAuth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Login successful
            console.log('User logged in:', userCredential.user);
            this.router.navigate(['/pages/project-list'])
            this.store.dispatch(authActions.login())
          })
          .catch((error) => {
            // Handle login error
            console.error('Login error:', error);
          });
      }
}