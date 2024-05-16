import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})

export class DeleteComponent {

  constructor(private employeesService: EmployeesService) {
  }

  deleteEmployee() {
    const input = document.getElementById("input-delete") as HTMLInputElement;
    const id = parseInt(input.value);
    const path = `https://dummy.restapiexample.com/api/v1/delete/${id}`;
      
    if (this.employeesService.validateInput(input)) {
      fetch(path, {
        method: "DELETE"
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("Network response was not ok.");
          }
          return response.json();
      })
      .then((data) => {
          console.log(data);
          alert("Funcionário excluído com sucesso!");
          input.value = "";
      })
      .catch((error) => {
          console.error("Error:", error);
          alert("Não foi possível realizar o fetch. Tente novamente.");
      });
    }
  }
}
