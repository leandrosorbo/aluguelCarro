import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //inputtext: string;
  select1: string;
  data1: string;
  select2: string;
  data2: string;


  key = 'username';

  selectedDateString1 = new Date().toISOString();
  minDateInput: string = new Date().toISOString();
  maxDateInput: string = new Date().toISOString();

  selectedDateString2 = new Date().toISOString();
  minDateOutput: string = new Date().toISOString();
  maxDateOutput: string = new Date().toISOString();

  constructor(private platform1: Platform, private platform2: Platform, private storage: Storage) {

    this.platform1.ready().then(() => {
      let date1: Date = new Date();
      date1.setDate(date1.getDate() - 0);
      this.minDateInput = date1.toISOString();

      date1 = new Date();
      date1.setDate(date1.getDate() + 365);
      this.maxDateInput = date1.toISOString();


    });
    this.platform2.ready().then(() => {
      let date2: Date = new Date();
      date2.setDate(date2.getDate() - 0);
      this.minDateInput = date2.toISOString();

      date2 = new Date();
      date2.setDate(date2.getDate() + 365);
      this.maxDateOutput = date2.toISOString();

    }

    );

  }

  saveData() {
    console.log(
      'select1', this.select1,
      'data1', this.data1,
      'select2', this.select2,
      'data2', this.data2,
    );
    //this.storage.set(this.key, '');
    this.storage.set('select1', this.select1);
    this.storage.set('data1', this.data1);
    this.storage.set('select2', this.select2);
    this.storage.set('data2', this.data2);
  }

  // loadData() {
//   this.storage.get(this.key).then((val) => {
//     console.log('Your username is', val);
//   });
// }


}