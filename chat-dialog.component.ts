import { Component, OnInit } from '@angular/core';
import {ChatService,Message} from './chat.service'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/scan'

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue:string;
  
  constructor(private chat:ChatService) { }

  ngOnInit(): void {

    //appends to array after each message is added to feedSource
    this.messages=this.chat.conversation.asObservable()
    .scan((acc,val)=>acc.concat(val))

    // this.chat.talk()
  }
  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue=''
  }

}
