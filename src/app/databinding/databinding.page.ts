import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; // Add Router import for navigation

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  async login() {
    if (this.username === "admin" && this.password === "user1") {
      const alert = await this.alertController.create({
        header: 'Login',
        subHeader: 'Status',
        message: 'Login Success!',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/dashboard']);
          }
        }],
        cssClass: 'custom-alert-text'
      });
  
      await alert.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Login Failed.',
        duration: 2000
      });
      toast.present();
    }
  }

  ngOnInit() {}
}
 
  