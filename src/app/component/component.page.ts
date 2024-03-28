import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { modalController } from '@ionic/core';


@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {


  async alert(){

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentToast(){

    const toast = await this.toastController.create({
      message: 'Your toast message here',
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
  async condition(){
    
  }
  constructor(private modalController: ModalController, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

}
