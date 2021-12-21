import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "Steve";

  greet(): void {
      alert("Hello " + this.name);
  };
}
