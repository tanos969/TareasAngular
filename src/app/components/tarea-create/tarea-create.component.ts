import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrls: ['./tarea-create.component.css']
})

export class TareaCreateComponent implements OnInit {
  tarea = {
    descripcion: '',
    duracion: 0
  };
  submitted = false;

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
  }

  createTarea(): void {
    const data = {
      descripcion: this.tarea.descripcion,
      duracion: this.tarea.duracion
    };

    this.tareaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTarea(): void {
    this.submitted = false;
    this.tarea = {
      descripcion: '',
      duracion: 0,
    };
  }

}