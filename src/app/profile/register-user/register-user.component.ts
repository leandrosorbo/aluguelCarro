import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  
  // public email: string = '';
  // public password: string = '';

  public user = {
    email: '',
    password:''
  }

  constructor(private alertCtrl: AlertController, private ModalController: ModalController, public auth: AngularFireAuth, private authService: AuthService, private router: Router) { }


  ngOnInit() {}

  closeModal(){
    this.ModalController.dismiss();
  }
   
    //função registrar
    signupUser(): Promise<firebase.auth.UserCredential>  {
      console.log(this.user.email,this.user.password);
    return firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password);
    }
    


    //registro autenticação e rota
    async onRegister(): Promise<void> {
      this.authService.signupUser(this.user.email, this.user.password).then(
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

    

}
