import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private ModalController: ModalController, private alertCtrl: AlertController, public auth: AngularFireAuth, private authService: AuthService, private router: Router) { }
  


public async showModalLogin(){
  const modal = await this.ModalController.create({
    component: LoginUserComponent
  });
  modal.present()
}

public async showModalRegister(){
  const modal = await this.ModalController.create({
    component: RegisterUserComponent
  });
  modal.present()
}


  ngOnInit() {
    
  }
  
}