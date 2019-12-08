import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class home implements OnInit {
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("User"));

    if (user!= null) {
      if (user['user_rol'] === "Admin") {
        document.getElementById("admin").style.display = "block";
      }
    }
  }

  constructor() { }

}
