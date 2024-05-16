import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "create",
    component: CreateComponent
  },

  {
    path: "search",
    component: SearchComponent
  },

  {
    path: "edit",
    component: EditComponent
  },

  {
    path: "delete",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
