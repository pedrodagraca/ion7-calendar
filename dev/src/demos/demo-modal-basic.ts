import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-modal-basic',
  template: `
    <ion-button (click)="openCalendar()">
      basic
    </ion-button>
  `,
})
export class DemoModalBasicComponent {
  date: Date = new Date(2021, 1, 1);

  constructor(public modalCtrl: ModalController) {}

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'BASIC',
      defaultScrollTo: this.date,
      defaultDate: this.date,
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
      this.date = date.dateObj;
    }
    console.log(date);
    console.log('role', role);
  }
}
