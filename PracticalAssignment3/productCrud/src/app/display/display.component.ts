import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  a = 10;
 name = "Hinal Acharya";
 datePipe: DatePipe = new DatePipe('en-US');
 tdate = new Date();
 transformDate = this.datePipe.transform(this.tdate, 'yyyy-MM-dd');
 ar =[1,2,"Three",false,5];
 selectedControl ='';

  constructor() {}

  ngOnInit(): void {}

  selected(event:any){
    this.selectedControl = event.target.value;
  }
  frm = new FormGroup({
    name : new FormControl(''),
  });

  fname="";

  showData(data : any)
  {
    this.fname = data.name;
  }

}
