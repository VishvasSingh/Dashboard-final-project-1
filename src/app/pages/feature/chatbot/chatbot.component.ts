import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatbotService } from './chatbot.service';
import { typingAnimation } from '../chatbot/animations'; // import your animation here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface Message {
  type: string;
  text: string;
  reply: boolean;
  user: {
    name: string;
    avatar: string;
  };
  date: Date;
  files?: string;
  quote?: string;
  latitude?: number;
  longitude?: number;
}

@Component({
  selector: 'app-chatbot',
  styleUrls: ['./chatbot.component.scss'],
  templateUrl: './chatbot.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NbChatModule, NbCardModule, CommonModule],
  animations: [typingAnimation],
})
export class ChatbotComponent implements OnInit {
  messages: Message[] = [];
  reply: boolean = false;
  name: string = 'Vishvas';
  constructor(
    private chatbotService: ChatbotService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chatbotService
      .getMessageEvents('http://127.0.0.1:5000/api/stream')
      .subscribe(
        (data) => {
         console.log(data)
          this.sendMessage({ message: data });
          this.cdr.detectChanges();
          // Handle received data here
        },
        (error) => {
          console.error('Error in SSE connection: ', error);
        },
        () => {
            console.log('Events finished')
        }
      );
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      type: 'text',
      date: new Date(),
      reply: this.reply,
      user: {
        name: this.name,
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    this.reply = !this.reply;
    this.name = this.name == 'Vishvas' ? 'Chat' : 'Vishvas';
  }
}
