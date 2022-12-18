import { Component } from '@angular/core';
import { ITask } from './models/task';
import { tasks as data } from './data/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title
  title = 'to do app';

  tasks: ITask[] = data;
  text: string = "";

  // addTask method
  addTask() {
    this.tasks.push(
      {
        id: this.tasks.length,
        text: this.text,
        taskDone: false
      }
    )
    console.log(this.tasks)
  }

  // delete Task method
  deleteTask(taskId: number) {
    console.log(taskId)
    this.tasks.splice(taskId, 1);
  }

  // for clearing the input entering place
  inputText: string;
  clear () {
    this.inputText = '';
  }

}
