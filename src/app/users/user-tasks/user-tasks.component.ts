import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, computed, inject, Input, input } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports:[RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService = inject(UsersService);
  userName = computed(()=>this.userService.users.find((u)=>u.id === this.userId())?.name);
  // @Input({ required: true })
  // userId!: string;
  // private userService = inject(UsersService);
  // userName = computed(
  //   () =>
  //     this.userService.users.find((u) => {
  //       console.log(this.userId);
  //      return u.id === this.userId;
  //     })?.name
  // );
}
