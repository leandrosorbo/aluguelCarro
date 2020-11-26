import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private authService: AuthService, private alertCtrl:AlertController) { }

  logoutUser(): Promise<void> {
    return this.authService.logoutUser();
  }

  closeAlertController(){
    this.alertCtrl.dismiss();
  }

  async confirmLogOut() {
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      message: 'Você deseja realmente sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            this.closeAlertController();
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.logoutUser();
          }
        }
      ]
    });
    alert.present();
  }


}
