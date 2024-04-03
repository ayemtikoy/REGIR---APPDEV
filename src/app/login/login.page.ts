import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { componentOnReady } from '@ionic/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class loginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router, private authentication: AuthenticationService) { }

  async loginPage() {
    const userArray = ['admin', 'user1'];
    const passArray = ['admin', 'user1'];

    if (userArray.includes(this.username) && passArray.includes(this.password)) {
      this.presentAlert();
      this.authentication.canProceed = true;
      this.routing();
    } else {
      this.presentToast();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'status',
      message: 'Successfully Logged-in!',
      buttons: ['OK'],
      cssClass: 'cus-alert'
    });
    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 3000);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed',
      duration: 2000
    });
    toast.present();
  }

  routing() {
    this.router.navigate(['dashboard/home']);
    localStorage.setItem('username', this.username);
  }
  
  ngOnInit() { }
}



