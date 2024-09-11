import { Component, computed, inject, Input, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  order = input<'asc' | 'desc'>();
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() == 'asc') {
          return a.id > b.id ? 1 : -1;
        } else {
          return a.id > b.id ? -1 : 1;
        }
      })
  );

  // without signals

  /* @Input({ required: true })
  userId!: string;
  get userTasks() {
    return this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId);
  }
      */
}
