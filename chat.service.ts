import { Injectable } from '@angular/core';
// import {ApiAiClient} from 'api-ai-javascript';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient'
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs/Observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'


export class Message {
  constructor(public content:string,public sentBy:string){}
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {
readonly token=  environment.dialogflow.angularBot;
readonly client= new ApiAiClient({accessToken:this.token})

conversation = new BehaviorSubject<Message[]>([])
  constructor() { }

  //Add message to source 
  update(msg:Message){
    this.conversation.next([msg])
  }

  // Sends and recieves messages via Diagflow
  converse(msg:string){
    const userMessage=new Message(msg,'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
    .then(res=>{
      const speech=res.result.fulfillment.speech
      const botMessage=new Message(speech,'bot')
      this.update(botMessage)
    })
  }


  // talk(){
  //   this.client.textRequest('Who are you!').then(res=>console.log(res))
  // }
}
