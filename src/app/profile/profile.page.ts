import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';  
import { AlertController } from '@ionic/angular'; 


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor (private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  //prompt CPF
 async cpfPrompt() {
  const alert = await this.alertCtrl.create({
    title: 'Login',
    header: 'Login',
    inputs: [
      {
        name: 'cpf',
        placeholder: 'CPF',
        type: 'number'
      },
      {
        name: 'password',
        placeholder: 'Senha',
        type: 'password'
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

//prompt Facebook
async fbPrompt() {
  const alert = await this.alertCtrl.create({
    title: 'Login',
    header: 'Login',
    inputs: [
      {
        name: 'e-mail',
        placeholder: 'E-mail'
      },
      {
        name: 'password',
        placeholder: 'Senha',
        type: 'password'
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

 //prompt google
async googlePrompt() {
const alert = await this.alertCtrl.create({
  title: 'Login',
  header: 'Login',
  inputs: [
    {
      name: 'e-mail',
      placeholder: 'E-mail'
    },
    {
      name: 'password',
      placeholder: 'Senha',
      type: 'password'
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
        placeholder: 'ID'
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
