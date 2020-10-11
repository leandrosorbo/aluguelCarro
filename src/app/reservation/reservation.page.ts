import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


type Car = {
  name: string;
  img: any;
  completed: boolean;
};

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor (public alertController: AlertController) { }

  ngOnInit() {
  }

  //cria o objeto car
public cars: Car[] = [
  {
    name: 'HB 20 Sedan',
    img: 'https://www.consorciodeautos.com.br/wp-content/plugins/ns_tabelafixa/imagensproduto/89-nm_produto12-01-2017-14-57-10-prF.png', 
    completed: false
  },
  {
    name: 'Jeep Compass 2.0',
    img: 'https://s2.glbimg.com/7lMJLzC9w2nPJ2FEDhwqxL1gUTg=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/08/03/jeep_compass_s_1.jpeg', 
    completed: false
  },
];
public filteredCars = this.cars.slice();

public selectedSegment: 'current' | 'previous' = 'current';

public segmentChanged(){
  if (this.selectedSegment === 'previous'){
    this.filteredCars = this.cars.filter(function (car){
      return car.completed;
    });
  } else {
    this.filteredCars = this.cars.filter(function (car){
      return !car.completed;
    });
  }
}


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Carro confirmado',
      message: 'Você deseja confirmar a escolha desse carro?',
      buttons: ['OK']
    });

    await alert.present();
  }


}

