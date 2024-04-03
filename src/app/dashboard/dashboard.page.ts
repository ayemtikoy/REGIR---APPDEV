import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { ModalComponent } from './calculator/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;
  constructor(private router: Router, private modalController: ModalController, private platform: Platform) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
  goToHome() {
    this.router.navigate(['dashboard', 'home']);
  }

  goToCalculator() {
    this.router.navigate(['dashboard', 'calculator']);
  }

  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    
    return await modal.present();
  }

}
