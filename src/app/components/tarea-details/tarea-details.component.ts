import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarea-details',
  templateUrl: './tarea-details.component.html',
  styleUrls: ['./tarea-details.component.css']
})

export class TareaDetailsComponent implements OnInit {
  currentTarea = null;
  message = '';

  constructor(
    private tareaService: TareasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTarea(this.route.snapshot.paramMap.get('id'));
  }

  getTarea(id): void {
    this.tareaService.read(id)
      .subscribe(
        tarea => {
          this.currentTarea = tarea;
          console.log(tarea);
        },
        error => {
          console.log(error);
        });
  }

  setCompletarTarea(): void {
    this.tareaService.complete(this.currentTarea.id)
      .subscribe(
        tarea => {
          this.currentTarea = tarea;
          console.log(tarea);
        },
        error => {
          console.log(error);
        });
  }

  updateTarea(): void {
    const id = this.currentTarea.id
    let actualizar_tarea = {
      "descripcion":this.currentTarea.descripcion,
      "duracion":this.currentTarea.duracion,
    }

    this.tareaService.update(id, actualizar_tarea)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tarea was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTarea(): void {
    this.tareaService.delete(this.currentTarea.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tareas']);
        },
        error => {
          console.log(error);
        });
  }
}