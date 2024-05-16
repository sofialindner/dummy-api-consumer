import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: '../../components/create/create.component.css'
})

export class EditComponent {
  employee: Employee = new Employee;
  
  constructor(private employeesService: EmployeesService) {
  }

  reset() {
    this.employee = new Employee;
  }

  updateEmployee() {
    const inputs = (document.getElementById("employee-form") as HTMLElement).querySelectorAll("input");
    const inputID = document.getElementById("id-input") as HTMLInputElement;
    const id = parseInt(inputID.value);
    const path = `https://dummy.restapiexample.com/api/v1/update/${id}`;
      
    let allFilled = true;
    inputs.forEach(input => {
      if (input.value == null || input.value == undefined || input.value == "") {
        allFilled = false;
        return;
      }
    });

    if (!allFilled) {
      alert("Preencha corretamente todos os campos.");
    
    } else if (this.employeesService.validateInput(inputID)) {
      fetch(path, {
        method: "PUT",
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
          alert("Funcionário alterado com sucesso!");
          this.reset();
      })
      .catch((error) => {
          console.error("Error:", error);
          alert("Não foi possível realizar o fetch. Tente novamente.");
      });
    }
  }
}
