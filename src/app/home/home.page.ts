import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public actionSheetController: ActionSheetController) {}
  
    async selectLocation() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Locais',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Shopping Aricanduva',
          icon: 'location',
          handler: () => {
            console.log('Shopping Aricanduva');
          }
        }, {
          text: 'Shopping Mooca',
          icon: 'location',
          handler: () => {
            console.log('Shopping Mooca');
          }
        }, {
          text: 'Shopping Pátio Higienólis',
          icon: 'location',
          handler: () => {
            console.log('Shopping Pátio Higienólopis');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }]
      });
      await actionSheet.present();
    }
  
  }