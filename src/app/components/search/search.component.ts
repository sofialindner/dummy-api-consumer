import { Component } from '@angular/core';
import { Employee } from '../../models/employee/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  employee: any;

  constructor(private employeesService: EmployeesService) {
  }

  searchEmployee(e: Event){
    const input = e.target as HTMLInputElement;
    const id = parseInt(input.value);
    const path = `https://dummy.restapiexample.com/api/v1/employee/${id}`;

    if (this.employeesService.validateInput(input)) {
      fetch(path)
      .then((response) => {
          if (!response.ok) {
              throw new Error("Network response was not ok.");
          }
          return response.json();
      })
      .then((data) => {
          this.employee = data.data;

          console.log(this.employee);
          this.newResearch();
          this.renderEmployeeInfo();
      })
      .catch((error) => {
          console.error("Error:", error);
          alert("Não foi possível realizar o fetch. Tente novamente.");
      });
    }
  }

  newResearch() {
    const cardEmployee = document.getElementById("card-employee") as HTMLDivElement;
    const input = document.getElementById("input-pesquisa") as HTMLInputElement;
    const button = document.getElementById("new-research") as HTMLElement;
    
    this.employeesService.toggleVisibility(button);
    input.value = "";
    cardEmployee.innerHTML = "";
  }

  renderEmployeeInfo() {
    const cardEmployee = document.getElementById("card-employee") as HTMLDivElement;
    let result = "";

    if (this.employee == null) {
      result = `<p id="no-result">Funcionário não encontrado<p>`;

    } else {
      result = 
      `<img src="../../../assets/imgs/profile_image.png">
      <table id="employee-info">
        <tr>
            <td class="thead">ID</td>
            <td class="tbody">${this.employee.id}</td>
        </tr>
        <tr>
            <td class="thead">Nome</td>
            <td class="tbody">${this.employee.employee_name}</td>
        </tr>
        <tr>
            <td class="thead">Salário</td>
            <td class="tbody">R$ ${this.employee.employee_salary}</td>
        </tr>
        <tr>
            <td class="thead">Idade</td>
            <td class="tbody">${this.employee.employee_age}</td>
        </tr>
      </table>`;
    }
    cardEmployee.innerHTML = result;
  }
}
