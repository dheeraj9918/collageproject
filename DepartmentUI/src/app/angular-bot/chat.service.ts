import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "hi":"Hello",
    "Hi": "Hello",
    "Total Fee":"61 thousand",
    "IT Department Hod":"Ass. Pro. RK Singh",
    "Who are you": "My name is IET Bot",
    "What is your role": "Just guide for the students",
    "defaultmsg": "I can't understand your text. For more information visit IET Ayodhya"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
