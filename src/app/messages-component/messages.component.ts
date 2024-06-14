import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: any[] = [
    { sender: 'Usuario 1', content: '¡Hola!', avatar: 'avatar1.jpg' },
    { sender: 'Usuario 2', content: '¡Hola! ¿Cómo estás?', avatar: 'avatar2.jpg' },
    { sender: 'Usuario 1', content: 'Bien, ¿y tú?', avatar: 'avatar1.jpg' }
  ];

  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Tú', content: this.newMessage, avatar: 'tu-avatar.jpg' });
      this.newMessage = '';
    }
  }

}
