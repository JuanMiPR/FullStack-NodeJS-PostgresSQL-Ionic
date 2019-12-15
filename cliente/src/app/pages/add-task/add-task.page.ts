import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss', '../../app.component.scss'],
})
export class AddTaskPage implements OnInit {
  Form: FormGroup;
  constructor(private menu: MenuController, private router: Router, private database: DatabaseService) {
    this.Form = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      note: new FormControl('',Validators.maxLength(150))
    })
  }
  addForm() {
    if (this.Form.valid) {
      let id = Math.floor(Math.random() * 9999) + 1;
      let task: Task = {
        id_task: id,
        tittle: this.Form.get("title").value,
        content: this.Form.get('note').value
      }
      this.database.addTask(task).then(task => {
        this.router.navigate(['/home/adminPage']);
      })
    } else {}
  }
  ngOnInit() {
  }
  toggleMenu() {
    this.menu.toggle();
  }
  goToTasks() {
    this.router.navigate(['/admin-tasks']);
  }
  goToCreateTasks() {
    this.router.navigate(['/add-task']);
  }
  get title() { return this.Form.get("title") }
  get note() { return this.Form.get("note") }
}
