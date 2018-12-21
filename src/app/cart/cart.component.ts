import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';



export interface IOrder {
  id: number;
  image: string;
  description: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

inventory: Array<IOrder> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const savedInventory = JSON.parse(localStorage.getItem('inventory'));
    if (savedInventory && savedInventory.length > 0) {
      this.inventory = savedInventory;
    } 
    }
  }


  




