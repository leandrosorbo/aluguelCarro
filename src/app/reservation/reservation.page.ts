import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


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
  

  constructor (public alertController: AlertController, private storage: Storage) { }

  ngOnInit() {
  }

  //cria o objeto car
public cars: Car[] = [
  {
    name: 'GRUPO A - CLICK CAR',
    img: 'https://www.autossegredos.com.br/wp-content/uploads/2020/04/fiat-mobi-easy-1280x720.jpg',
    completed: false,
    info: 'Mobi Like ou Similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
    valor:'R$ 97,00'
  },
  {
    name: 'GRUPO B - ECONÔMICO',
    img: 'https://imganuncios.mitula.net/fiat_uno_2020_flex_way_1_3_firefly_flex_8400114599656210155.jpg', 
    completed: false,
    info: 'Onix, Uno, Sandero ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 104,00'
  },
  {
    name: 'GRUPO C - ECÔNOMICO SEDAN',
    img: 'https://www.autossegredos.com.br/wp-content/uploads/2016/12/chevrolet-prisma_1-1280x720.jpg', 
    completed: false,
    info: 'Logan, Prisma, Onix Plus ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 110,00'
  },
  {
    name: 'GRUPO D - ECÔNOMICO PLUS',
    img: 'https://www.consorciodeautos.com.br/wp-content/plugins/ns_tabelafixa/imagensproduto/89-nm_produto12-01-2017-14-57-10-prF.png', 
    completed: false,
    info: 'HB20 S ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 102,00'
  },
  {
    name: 'GRUPO E - COMPACTO',
    img: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/colorizer/1-onix-premier-branco-summit.jpg?imwidth=960', 
    completed: false,
    info: 'Gol, Onix, Sandero, HB20 ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 107,00'
  },
  {
    name: 'GRUPO F - HATCH AUTOMÁTICO',
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/vw-polo-highline-2021.jpg?quality=70&strip=info', 
    completed: false,
    info: 'Polo, HB20 ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 3 Malas',
    valor:'R$ 121,00'
  },
  {
    name: 'GRUPO G - SEDAN COMPACTO S',
    img: 'https://4.bp.blogspot.com/-tFyAUVnx-Qo/VTFsb_sPn6I/AAAAAAACGEw/1k2vSfULa_Y/s1600/VW-Voyage-2016-Evidence.jpg', 
    completed: false,
    info: 'Voyage, Logan ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 4 Malas',
    valor:'R$ 115,00'
  },
  {
    name: 'GRUPO H - SEDAN AUTOMÁTICO',
    img: 'https://www.litoralcar.com.br/foto-resize/g/806252/31/chevrolet-onix-sedan-plus-turbo-lt--2020-9752111.jpg', 
    completed: false,
    info: 'Onix, HB20 S ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 4 Malas',
    valor:'R$ 130,00'
  },
  {
    name: 'GRUPO I - SUV AUTOMÁTICA',
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Renegade_Moab_002-large-e1596229407148.jpeg?quality=70&strip=info', 
    completed: false,
    info: 'Creta, Renegade, T-cross ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 5 Malas',
    valor:'R$ 145,00'
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
  {
    name: 'GRUPO K - MINIVAN AUTOMÁTICA',
    img: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2019-spin/colorizer/01-images/2019-spin-cinza-satin-steel.png?imwidth=960', 
    completed: false,
    info: 'Spin ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '7 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
    valor:'R$ 160,00'
  },
  {
    name: 'GRUPO L - MINI PICK-UP',
    img: 'data:image/jpeg;base64,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', 
    completed: false,
    info: 'Strada, Saveiro ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '2 Pessoas - Ar Condicionado - Mecanico - ABS - 0 Mala',
    valor:'R$ 189,00'
  },
];


//storage
  
  key = 'username';


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

 saveData() {
  console.log(
    'selectedSegment', this.selectedSegment,
  );
 
  this.storage.set('selectedSegment', this.selectedSegment);
  
}

// loadData() {
//   this.storage.get(this.key).then((val) => {
//     console.log('Your username is', val);
//   });
// }

}
