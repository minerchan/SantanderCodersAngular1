import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateLessThanValidator } from 'src/app/validators/dateLessThan.validator';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss'],
})
export class TaskFormReactiveComponent {
  public formTask: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    date: ['', [Validators.required, dateLessThanValidator()]],
    status: ['', Validators.required],
    tags: this.formBuilder.array([]),
  });

  @Output() addTask = new EventEmitter();

  get tags() {
    return this.formTask.get('tags') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  submitTask() {
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
  }

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }
}
