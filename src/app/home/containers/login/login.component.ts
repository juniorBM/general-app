import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrors } from '../../../utils/utils.model';
import { getFormErrors } from '../../../utils/utils';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth';
import { Observable } from 'rxjs';
import { User } from '../../../user/interfaces/user';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
  formErrors: FormErrors[] = [];
  user$: Observable<User> = this.userService.getUser();
  isSubmitted!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$.subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(form: FormGroup): void {
    this.formErrors = getFormErrors(form);
    console.log(this.formErrors);
    if (!Object.keys(this.formErrors).length) {
      const credentials: Auth = form.value;
      console.log(credentials);
      this.authService.login(credentials).subscribe(data => {
        // const user = jwt_decode(data.token);
        // console.log(user);
      });
    }
  }
}
