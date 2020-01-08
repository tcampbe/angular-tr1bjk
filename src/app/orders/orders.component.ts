import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = []
  constructor() { }

  ngOnInit() {
    this.orders = [
 {
     "id": 1,
     "product": "vel turpis. Aliquam",
     "delivered": false
 },
 {
     "id": 2,
     "product": "dictum ultricies ligula.",
     "delivered": true
 },
 {
     "id": 3,
     "product": "tempus scelerisque, lorem",
     "delivered": true
 },
 {
     "id": 4,
     "product": "consectetuer adipiscing elit.",
     "delivered": false
 },
 {
     "id": 5,
     "product": "vitae semper egestas,",
     "delivered": false
 }
]
  }

}