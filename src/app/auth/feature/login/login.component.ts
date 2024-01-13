import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NbButtonModule, NbCardModule, NbInputModule } from "@nebular/theme";

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    standalone: true,
    imports: [NbCardModule, NbInputModule, NbButtonModule, FormsModule, ReactiveFormsModule]
})

export class LoginComponent{

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {
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
            this.router.navigate(['/pages'])
          })
          .catch((error) => {
            // Handle login error
            console.error('Login error:', error);
          });
      }
}