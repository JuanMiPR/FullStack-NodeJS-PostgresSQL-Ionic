import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  task_title;
  task_content;
  constructor(private router: ActivatedRoute, private database: DatabaseService) {
    this.showTaskInfo()
  }

  ngOnInit() {
  }
  showTaskInfo() {
    let idTask = this.router.snapshot.paramMap.get("id");

    this.database.getTaskById(idTask).then((task) => {

      this.task_title = task[0]['tittle'];
      this.task_content = task[0]['content'];
    })
  }
}
