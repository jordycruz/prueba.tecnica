import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [];
  urlLogo: String = 'https://w7.pngwing.com/pngs/140/543/png-transparent-logo-company-business-business-blue-angle-company.png';
}
