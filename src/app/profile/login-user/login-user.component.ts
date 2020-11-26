import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {

public user = {
  email: '',
  password:''
}

constructor(private alertCtrl: AlertController, private ModalController: ModalController, public auth: AngularFireAuth, private authService: AuthService, private router: Router) { }


  ngOnInit() {}

  closeModal(){
    this.ModalController.dismiss();
  }

 //função login
 loginUser(): Promise<firebase.auth.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password);
}


   //login Autenticação e rota
  async onLogin(): Promise<void> {
    this.authService.loginUser(this.user.email, this.user.password).then(
      () => {
        this.router.navigateByUrl('home');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }



//logout 
  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

}
