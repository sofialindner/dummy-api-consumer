import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
cfForm: any;

  constructor(public router: Router) {
  }

  showPassword(e: Event) {
    let passwordInput = document.getElementById("fsenha") as HTMLInputElement;
  
      if (passwordInput.value == "" || passwordInput.value == null || passwordInput.value == undefined) {
        alert("Digite uma senha primeiro.");
        e.preventDefault();

      } else {
          if (passwordInput.type == "password") {
              passwordInput.type = "text";
              console.log(passwordInput);
          } else {
              passwordInput.type = "password";
              console.log(passwordInput);
          }
      }
  }

  setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = name +"="+ value+"; expires="+ date.toUTCString()+"; path=/";
  }

  login(e: Event) {
    let user = (document.getElementById("fusername") as HTMLInputElement).value;
    let password = (document.getElementById("fsenha") as HTMLInputElement).value;
    let remember = document.getElementById("checkbox-remember") as HTMLInputElement;

    let noPassword = password == "" || password == null || password == undefined;
    let noUser = user == "" || user == null || user == undefined;

    if (noPassword && noUser) {
        alert("Prencha corretamente todos os campos.");
        e.preventDefault();
    } else if (noPassword) {
        alert("Prencha a senha.");
        e.preventDefault();
    } else if (noUser) {
        alert("Preencha o nome de usuário.")
        e.preventDefault();
    } else {
        if (remember.checked) {
          this.setCookie("username", user);
          this.setCookie("password", password);
        }
        sessionStorage.setItem("user", user);
        e.preventDefault();
        this.router.navigateByUrl("/create");
    }
  }
}
