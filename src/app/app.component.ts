import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {mascotaModel} from './models/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [];
  urlLogo: String = 'https://w7.pngwing.com/pngs/140/543/png-transparent-logo-company-business-business-blue-angle-company.png';

  historial: Array<mascotaModel> = [];

  ngOnInit() {
    this.items = [
        {
            label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];
    this.historial = [
      {
        id: 1,
        nombreMascota: 'Milan',
        edad: 2,
        estado: 'activo',
        ultimaRevision: '20/01/2022'
      },
      {
        id: 2,
        nombreMascota: 'Jordin',
        edad: 5,
        estado: 'activo',
        ultimaRevision: '15/01/2022'
      },
      {
        id: 3,
        nombreMascota: 'Brian',
        edad: 1,
        estado: 'activo',
        ultimaRevision: '15/02/2022'
      },
      {
        id: 4,
        nombreMascota: 'Lucas',
        edad: 1,
        estado: 'activo',
        ultimaRevision: '11/02/2022'
      }
    ];
  }

  public eliminarRegistro(id:Number) {
    const index = this.historial.findIndex((item) => item.id === id);
    this.historial.splice(index, 1);
  }

  public editarRegistro(id:Number) {
    const index = this.historial.findIndex((item) => item.id === id);
    console.log(index);
    
  }
}
