import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  constructor(private modelCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modelCtrl.dismiss()
  }

  onBook() {
    this.modelCtrl.dismiss()
  }

}
