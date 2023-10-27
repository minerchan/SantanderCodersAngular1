import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  submitTask(form: NgForm) {
    console.log('chamou');
    if(!form.valid) return;
    
    console.log('chamou 02');
    this.addTask.emit(this.newTask);
    this.newTask = new Task();
  }
}
