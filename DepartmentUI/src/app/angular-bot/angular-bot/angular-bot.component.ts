import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-angular-bot',
  templateUrl: './angular-bot.component.html',
  styleUrls: ['./angular-bot.component.css']
})
export class AngularBotComponent implements OnInit {

  messages: Message[] = [];
  value: string='';
  constructor(public chatService: ChatService) { }
  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

}
