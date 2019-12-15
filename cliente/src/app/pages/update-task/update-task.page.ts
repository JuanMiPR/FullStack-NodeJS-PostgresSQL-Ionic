import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  Form: FormGroup;
  oldTaskTitle: string;
  oldTaskContent: string;
  idTask;
  constructor(private navigate: Router, private router: ActivatedRoute, private database: DatabaseService) {
    this.Form = this.createFormGroup();
    this.showTaskInfo();
  }

  ngOnInit() {
  }
  showTaskInfo() {
    this.idTask = this.router.snapshot.paramMap.get("id");

    this.database.getTaskById(this.idTask).then((task) => {
      
      this.oldTaskTitle = task[0]['tittle'];
      this.oldTaskContent = task[0]['content'];
    })
  }
  createFormGroup() {
    return new FormGroup({

      title: new FormControl('', [Validators.minLength(3)]),
      note: new FormControl('', Validators.maxLength(150))
    })
  }
  addForm() {

    if (this.Form.valid) {
      let newTitle;
      let newContent;
      if (this.Form.get('title').value === '') {
        newTitle = this.oldTaskTitle;
      } else {
        newTitle = this.Form.get('title').value;
      }
      if (this.Form.get('note').value === '') {
        newContent = this.oldTaskContent;
      } else {
        newContent = this.Form.get('note').value;
      }

      let task: Task = {
        id_task: this.idTask,
        tittle: newTitle,
        content: newContent
      }
      this.database.updateTask(task).then(() => {
        this.navigate.navigate(['/home/adminPage']);
      })

    } else {
     
    }

  }
  beforeUpdate() {
    document.getElementById('beforeUpdateButton').style.display = 'none';
    document.getElementById('updateTasks').style.display = 'block';

  }
  get title() { return this.Form.get("title") }
  get note() { return this.Form.get("note") }
}
