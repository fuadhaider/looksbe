import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  notifications: string[] = [];
  constructor() { }
  add(notifications: string) {
    this.notifications.push(notifications);
  }
}
