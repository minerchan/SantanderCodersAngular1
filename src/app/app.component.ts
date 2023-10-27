import { Component, ElementRef, ViewChild } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('myDiv') detailDiv!: ElementRef;

  listTask: Task[] = [
    {
      date: new Date(),
      description: 'Criar pipe de moedas',
      status: 'toDo',
      title: 'Fazer pipe personalizada',
    },
    {
      date: new Date(),
      description: 'Fazer o botão editar funcionar',
      status: 'trabalhando',
      title: 'Botão editar',
    },
    {
      date: new Date(),
      description: 'Tem que ser personalizada',
      status: 'toDo',
      title: 'Criar diretiva',
    },
    {
      date: new Date(),
      description: 'Criar um log para as tarefas clicadas',
      status: 'finalizado',
      title: 'Criar log de task',
    },
  ];
  selectedTask: Task | null = null;
  logTask: Task[] = [];

  ngOnInit() {
    console.log(this.selectedTask);
  }

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
    this.logTask.push(task);
    setTimeout(() => {
      this.detailDiv.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
