import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  condition = false;
  isSmall: boolean = false;
  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private toastController: ToastController,) { }

  ngOnInit() {}
 
  async closeModal(){
    await this.modalController.dismiss();
  }

  async alert(){

    const alert = await this.alertController.create({
      header: 'Hi!',
      subHeader: 'Hello?',
      message: 'This is an alert message xD',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentToast(){

    const toast = await this.toastController.create({
      message: 'bye-byeee',
      duration: 2000
    });
    toast.present();
  }
  async dismissToast(){
    const toast = await this.toastController.getTop();
    if (toast) {
      toast.dismiss();
    }
  }
}
