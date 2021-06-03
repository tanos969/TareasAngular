import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaCreateComponent } from './components/tarea-create/tarea-create.component';
import { TareaDetailsComponent } from './components/tarea-details/tarea-details.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaListComponent },
  { path: 'tareas/:id', component: TareaDetailsComponent },
  { path: 'create', component: TareaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
