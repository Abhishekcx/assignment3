import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }
  country=['USA','India','UK','Italy'];
  subject=['Angular','React','Vue','HTML']
  
    ngOnInit(): void {
     
        }
    
    
  
    onSubmit(value:any)
    {
        console.log(value)
    }
  
  
  }
  