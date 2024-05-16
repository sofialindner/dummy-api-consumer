import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.css'
})

export class EmployeesTableComponent {
  employees: any;

  ngOnInit(): void {
		const employeesSaved = localStorage.getItem("employees");

		if (employeesSaved != null) {
			this.employees = JSON.parse(employeesSaved);
		} else {
      this.fetchAllEmployees();
    }
	}

  async fetchAllEmployees() {
    try {
        const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");

        if (!response.status) {
            throw new Error("Could not fetch resource.");
        }

        const data = await response.json();
        console.log(data.data)
        this.employees = data.data;
        localStorage.setItem("employees", JSON.stringify(this.employees));

    } catch (error) {
        this.fetchAllEmployees();
        console.error(error);
    }
  }

}
