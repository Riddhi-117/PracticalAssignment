import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client'
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private http: HttpClient) {
    this.socket = io.connect("ws://localhost:5000")
   }

   headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json")

  socket:any

  listen(eventName:string){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data:any)=>{
        Subscriber.next(data)
      })
    })
  }

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data)
  }

}
