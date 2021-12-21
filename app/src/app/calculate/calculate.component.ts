import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  balance:number=20000;
  constructor() { }

  ngOnInit(): void {
    
  }
  showval()
  {
    console.log(this.balance);

  }

  mi(value:number)
  {
    this.balance=this.balance-value;
  }

  ad(value:number)
  {
    this.balance=this.balance+value;
  }
  di(value:number)
  {
    this.balance=this.balance/value;
  }
  mu(value:number)
  {
    this.balance=this.balance*value;
  }
}
