import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.ds.reqGet('/products').subscribe(successDetails => {
      this.products = successDetails;
    }, errorDetails => {
      this.products = [];
    });
  }

}
