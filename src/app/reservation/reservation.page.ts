import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


type Car = {
  name: string;
  img: any;
  completed: boolean;
  info: string;
  km: string;
  desconto: string;
  detalhes: string;
  valor: string;
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
    name: 'GRUPO A - CLICK CAR',
    img: 'https://www.autossegredos.com.br/wp-content/uploads/2020/04/fiat-mobi-easy-1280x720.jpg',
    completed: true,
    info: 'Mobi Like ou Similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
    valor:'R$ 97,00' //colocar código de valor
  },
  {
    name: 'GRUPO J - SUV ESPECIAL',
    img: 'https://s2.glbimg.com/7lMJLzC9w2nPJ2FEDhwqxL1gUTg=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/08/03/jeep_compass_s_1.jpeg', 
    completed: false,
    info: 'Mobi Like ou Similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 4 Malas',
    valor:'R$ 97,00' //colocar código de valor
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
 async detailsAlert(car){
  const alert = await this.alertController.create({
    header: '' +car.name+ '',
    message: '<strong>Informação:</strong> <p>' + car.info + '</p>' +
    '<li>  '+ car.km +' </li>' +
    '<li> '+ car.desconto +' </li>' +
    '<p><strong>Destalhes:</strong></p> <p>'+ car.detalhes +'</p>'+
    '<p> Valor:'+ car.valor + '</p>',
    buttons: ['OK']
  });

  await alert.present();
 }

}

