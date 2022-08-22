import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  totalPrice: Number = 0;
  toppings = new FormControl('');
  toppingList: string[] = ['Em 1', 'Em 2','Em 3','Em 4','Em 5','Em 6','Em 7','Em 8','Em 9','Em 10','Em 11'];
  constructor() { }

  ngOnInit(): void {
  }

}
