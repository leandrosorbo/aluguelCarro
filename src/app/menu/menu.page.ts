import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private authService: AuthService) { }

  logoutUser(): Promise<void> {
    return this.authService.logoutUser();
  }

}
