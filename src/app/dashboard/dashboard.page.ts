import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IonFab } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController,


    ) {
    this.route.params.subscribe(params => {

    });
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
  async condition(){
    
  }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }

  goToCalculator() {
    this.router.navigate(['/calculator']);
  }

  logout() {
    this.router.navigate(['/databinding']);
  }
}