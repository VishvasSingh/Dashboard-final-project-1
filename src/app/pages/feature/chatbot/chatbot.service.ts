import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor() {}

  getMessageEvents(url: string): Observable<string> {
    return new Observable((observer) => {
      const eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        observer.next(event.data);
      };
      eventSource.onerror = (error) => {
        observer.error(error);
      };
      return () => {
        eventSource.close();
      };
    });
  }
}
