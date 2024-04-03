import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalComponent } from '../calculator/modal/modal.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {

  condition = false;
  constructor(private modalController: ModalController, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {

  }

}
