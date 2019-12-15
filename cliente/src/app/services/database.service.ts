import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from '../models/task.model';



const key = 'Task-key';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private storage: Storage
  ) { }

  addTask(task: Task): Promise<any> {
    return this.storage.get(key).then((tasks: Task[]) => {
      if (tasks) {
        tasks.push(task);
        return this.storage.set(key, tasks);
      } else {
        return this.storage.set(key, [task]);
      }
    })
  }

  getTasks(): Promise<Task[]> {
    return this.storage.get(key);

  }
  deleteTask(id: number): Promise<Task> {
    return this.storage.get(key).then((tasks: Task[]) => {
      if (!tasks || tasks.length == 0) {
        return null
      }
      let toKeepTasks: Task[] = []
      for (const i of tasks) {
        if (i.id_task !== id) {
          toKeepTasks.push(i);
        }
      }
      return this.storage.set(key, toKeepTasks);
    })
  }
  getTaskById(id): Promise<Task[]> {
    return this.storage.get(key).then((tasks: Task[]) => {
      if (!tasks || tasks.length == 0) {
        return null
      }
      let toKeepTasks: Task[] = []
      for (const i of tasks) {

        if (i.id_task == id) {

          toKeepTasks.push(i);
        }
      }
      return toKeepTasks;
    })
  }
  updateTask(task: Task): Promise<Task[]> {
    return this.storage.get(key).then((tasks: Task[]) => {
      if (!tasks || tasks.length == 0) {
        return null
      }
      let newTasks: Task[] = []
      for (const i of tasks) {
        if (i.id_task == task.id_task) {
         
          newTasks.push(task);
        } else {
          newTasks.push(i);
        }
      }
      return this.storage.set(key, newTasks);
    })

  }

}
