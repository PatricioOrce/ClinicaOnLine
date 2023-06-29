import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLES_ENUM } from 'src/app/enumerators/roles.enum';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('deArribaHaciaAbajo', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('700ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  public formulario: FormGroup;
  public spinner = false;

  constructor(
    public adminService: AdminService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.formulario = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  async submit() {
    let item = {
      email: this.formulario.controls['email'].value,
      password: this.formulario.controls['password'].value,
    };

    try {
      this.spinnerShow();
      this.authService.login(item.email, item.password).then((res) => {
        this.spinnerHide();
        if (this.authService.msjError == '') {
          this.adminService.addLogIngreso(item.email);
          this.router.navigate(['inicio']);
        }
      });
    } catch (error) {
      this.spinnerHide();
    }
  }

  ngOnDestroy(): void {
    this.authService.setearMsjError();
  }

  onAdmin1() {
    this.formulario.controls['email'].setValue('patricioorce2001@gmail.com');
    this.formulario.controls['password'].setValue('123456789');
  }

  onEspecialista1() {
    // this.formulario.controls['email'].setValue('hurdapiydu@gufum.com');
    this.formulario.controls['email'].setValue('furdojurto@gufum.com');
    this.formulario.controls['password'].setValue('123456789');
  }

  onEspecialista2() {
    this.formulario.controls['email'].setValue('marzizupsi@gufum.com');
    // this.formulario.controls['email'].setValue('sorduverte@gufum.com');
    this.formulario.controls['password'].setValue('123456789');
  }

  onPaciente1() {
    // this.formulario.controls['email'].setValue('ladrunofyu@gufum.com');
    this.formulario.controls['email'].setValue('kerdeborki@gufum.com');

    this.formulario.controls['password'].setValue('123456789');
  }

  onPaciente2() {
    // this.formulario.controls['email'].setValue('dafyugortu@gufum.com');
    this.formulario.controls['email'].setValue('curdokarde@gufum.com');
    this.formulario.controls['password'].setValue('123456789');
  }

  onPaciente3() {
    this.formulario.controls['email'].setValue('ferzihurku@gufum.com');
    this.formulario.controls['password'].setValue('123456789');
  }

  private spinnerShow() {
    this.spinner = true;
  }

  private spinnerHide() {
    this.spinner = false;
  }
}
