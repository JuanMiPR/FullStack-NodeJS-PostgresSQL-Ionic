import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  content:string;
  constructor(private router: ActivatedRoute, private api: ApiService) {

    let idProduct = this.router.snapshot.paramMap.get("id");
    this.api.getProductbyId(idProduct).subscribe(data => {

      
      this.content = data['data']['id_product'];

    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {

  }

}
