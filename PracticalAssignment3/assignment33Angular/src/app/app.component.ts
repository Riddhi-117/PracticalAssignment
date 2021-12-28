import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment33';
  
  myForm = new FormGroup({
    textMessage: new FormControl("", [Validators.required])
  })

  constructor(private WebsocketService:WebsocketService) {
    
  }

  ngOnInit(): void {
      // this.WebsocketService.listen('recieveMessage').subscribe((data)=>{
      //   console.log(data)
      // })
  }

  value: any = []

  message: any
  reply: any

  select() {

    this.WebsocketService.emit('sendMessage',this.myForm.value.textMessage)
    this.WebsocketService.listen('recieveMessage').subscribe((data)=>{
      this.value.push([this.myForm.value.textMessage, data])
    })

      // this.socket.emit('sendMessage', {
      //   msg: this.myForm.value.textMessage
      // })
      // this.socket.on('recieveMessage', (data: any) => {
      //   this.value.push([this.myForm.value.textMessage, data])
      // })
  }

}
