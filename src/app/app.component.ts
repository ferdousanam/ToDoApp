import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'ToDo | ToDoTask';
  title = 'ToDo Task List';
  TaskList = [];
  task = '';
  countTask = 0;
  public constructor(private titleService: Title) {
    this.setTitle(this.appTitle);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  addTask() {
    if (this.task != '') {
      this.TaskList.push(this.task);
      this.countTask = this.TaskList.length;
      this.task = '';
    }
  }

  removeTask(index) {
    this.TaskList.splice(index, 1);
    this.countTask = this.TaskList.length;
  }
}
