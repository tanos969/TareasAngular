import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})

export class TareaListComponent implements OnInit {

  tareas: any;
  currentTarea = null;
  currentIndex = -1;
  name = '';

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
    this.readTareas();
  }

  readTareas(): void {
    this.tareaService.readAll()
      .subscribe(
        tareas => {
          this.tareas = tareas;
          console.log(tareas);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readTareas();
    this.currentTarea = null;
    this.currentIndex = -1;
  }

  setCurrentTarea(tarea, index): void {
    this.currentTarea = tarea;
    this.currentIndex = index;
  }

}