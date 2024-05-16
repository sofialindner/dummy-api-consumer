import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private employeesService: EmployeesService) {

  }

  ngOnInit(): void {
    const menuItems = document.querySelectorAll("li");

    menuItems.forEach(li => {
      const hoverDiv = li.querySelector(".hover-div") as HTMLElement;

      li.addEventListener("mouseover", (e: Event) => this.employeesService.toggleVisibility(hoverDiv));
      li.addEventListener("mouseout", (e: Event) => this.employeesService.toggleVisibility(hoverDiv));

      li.querySelectorAll("a img div").forEach(child => {
        child.addEventListener("mouseover", (e: Event) => this.employeesService.toggleVisibility(hoverDiv));
        child.addEventListener("mouseout", (e: Event) => this.employeesService.toggleVisibility(hoverDiv));
      });

    });
  }
}
