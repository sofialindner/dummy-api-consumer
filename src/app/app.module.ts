import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EmployeesService } from './services/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    LoginComponent,
    SidebarComponent,
    EmployeesTableComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
