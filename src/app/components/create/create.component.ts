import { Component } from '@angular/core';
import { Employee } from '../../models/employee/employee.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  employee: Employee = new Employee();

  reset() {
    this.employee = new Employee();
  }

  createEmployee(e: Event) {
    e.preventDefault();
    const path = "https://dummy.restapiexample.com/api/v1/create";
    const inputs = (document.getElementById("employee-form") as HTMLElement).querySelectorAll("input");

    let allFilled = true;
    inputs.forEach(input => {
      if (input.value == null || input.value == undefined || input.value == "") {
        allFilled = false;
        return;
      }
    });

    if (!allFilled) {
      alert("Preencha corretamente todos os campos.");

    } else {
      fetch(path, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },

          body: JSON.stringify(this.employee),
      })
          .then((response) => {
              if (!response.ok) {
                  throw new Error("Network response was not ok.");
              }
              return response.json();
          })
          .then((data) => {
              console.log(data);
              alert("Funcionário cadastrado com sucesso!");
              this.reset();
          })
          .catch((error) => {
              console.error("Error:", error);
              alert("Não foi possível realizar o fetch. Tente novamente.");
          });

    }

  }


}
