import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor() { }

  validateInput(input: HTMLInputElement) {
    const value = input.value;

    if (value == null || value == undefined || value == "") {
      alert("Desculpe, é preciso preencher o campo antes de prosseguir.")
      return false;

    } else if (isNaN(parseInt(value))) {
      alert("O ID deve ser um número.")
      return false;

    } else {
      return true;
    }
  }

  toggleVisibility(elm: HTMLElement) {
    if (elm.style.visibility == "visible") {
      elm.style.visibility = "hidden";
    } else {
      elm.style.visibility = "visible";
    }
  }
}
