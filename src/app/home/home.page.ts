import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { User, iUser } from '../model/user.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: any;
  user: User = new User();
  userList: User[] = [];

  constructor(private alertController: AlertController, private router: Router, private userServ: UsersService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('user')
    this.router.navigate(['login'])
  }

  async createUser() {
    if (this.user.id) {
      this.userServ.updateUser(this.user);
    } else {
      this.userServ.createUser(this.user);
    }
    this.getUser();
    this.user = new User()
  }

  async getUser() {
    this.userList = await this.userServ.getUser()
  }

  async save() {
    if (this.user.id) {
      await this.userServ.updateUser(this.user);
    } {
      await this.userServ.createUser(this.user);
    }
    await this.getUser();
    this.user = new User()
  }

  async confirmDelete(user: User) {
    const alert = await this.alertController.create({
      header: "Confirm Delete",
      message: "Are you sure you want to delete the user?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert cancelled');
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: async () => {
            await this.delete(user)
          },
        },
      ],
    })
    await alert.present()
  }

  async delete(user: User) {
    await this.userServ.deleteUser(user)
    this.getUser();
    this.user = new User()
  }

}
