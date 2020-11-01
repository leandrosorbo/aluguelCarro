import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private alertCtrl: AlertController, public auth: AngularFireAuth) { }

    login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  } 


  ngOnInit() {
  }

  //prompt Login
  async loginPrompt() {
    const alert = await this.alertCtrl.create({
      title: 'Login',
      header: 'Login',
      inputs: [
        {
          name: 'ID',
          placeholder: 'ID',
          type: 'string',
        
        },
        {
          name: 'password',
          placeholder: 'Senha',
          type: 'password',

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Login cancelado!');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (User.isValid(data.username, data.password)) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }


  //prompt Cadastro
  async cadPrompt() {
    const alert = await this.alertCtrl.create({
      title: 'Registro',
      header: 'Registro',
      inputs: [
        {
          name: 'username',
          placeholder: 'ID',

        
      },
      {
        name: 'password',
        placeholder: 'Senha',
        type: 'password'
      },
      {
        name: 'confirm password',
        placeholder: 'Confirmar Senha',
        type: 'password'
      },
      {
        name: 'e-mail',
        placeholder: 'e-mail'
      },
      {
        name: 'cpf',
        placeholder: 'CPF',
        type: 'number'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cadastro cancelado!');
        }
      },
      {
        text: 'Registrar',
        handler: data => {
          console.log('Cadastro efetuado com sucesso!')
        }
      }
    ]
  });
 await alert.present();
} 

}