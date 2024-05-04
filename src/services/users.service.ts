import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { User, iUser} from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, updateDoc, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  orderList: User[] = [];

  constructor(private userServ: UsersService, private toastController: ToastController, private alertController: AlertController ) { }

  async getUser(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);

    const users: User[] = []

    querySnapshot.forEach((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
    });
    return users;
  }

  async updateUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);
    try {
      const docData = doc(db, "users", user.id)
      if (user.user_name == "" || user.user_nickname == "" || user.user_gender == "" || user.user_hobby == "" || user.user_crushName == "") {
        await this.presentAlert("Error", "Please fill all required fields.")

      }  else {
        const docRef = {
          user_name: user.user_name,
          user_nickname: user.user_nickname,
          user_gender: user.user_gender,
          user_hobby: user.user_hobby,
          user_crushName: user.user_crushName,
        }
        await updateDoc(docData, docRef)
        this.presentToast("Order successfully updated!", 2000)
      }
    } catch (error) {
      this.presentAlert("Failed", "An error has occured, please try again.")
    }
  }

  async deleteUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    try {
      const docData = doc(db, "users",user.id);
      await deleteDoc(docData)
      this.presentToast("User successfully deleted!", 2000)
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  async presentAlert(_header: string, _message: string) {
    const alert = await this.alertController.create(
      {
        header: _header,
        message: _message,
        buttons: ['Ok'],
      }
    )
    await alert.present();
  }

  async presentToast(_message: string, _duration: number) {
    const toast = await this.toastController.create({
      message: _message,
      duration: _duration,
    });

    await toast.present();
  }

  async createUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);
    const col = collection(db, "users");
    try {

      if (user.user_name == "" || user.user_nickname == "" || user.user_gender == "" || user.user_hobby == "" || user.user_crushName == "") {
        await this.presentAlert("Error", "Please fill all required fields.")
      }  
      else {
        const userDoc = await addDoc(col, {
          user_name: user.user_name,
          user_nickname: user.user_nickname,
          user_gender: user.user_gender,
          user_hobby: user.user_hobby,
          user_crushName: user.user_crushName,
        });
        await this.presentToast("User successfully added!", 2000)
      }

    } catch (error) {
      console.error(error)

      console.log("Incomplete.");
      await this.presentAlert("Error", "Please fill all required fields.")
    }
  }
  }

