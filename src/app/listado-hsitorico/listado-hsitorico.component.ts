import { Component, OnInit } from '@angular/core';
import {mascotaModel} from '../models/mascota';

@Component({
  selector: 'app-listado-hsitorico',
  templateUrl: './listado-hsitorico.component.html',
  styleUrls: ['./listado-hsitorico.component.css']
})
export class ListadoHsitoricoComponent implements OnInit {

  constructor() { }

  historial: Array<mascotaModel> = [];

  //Actualizar registros
  mensajeErrorFormulario: string = '';
  editar: boolean = false;
  idEditar: Number = 0;
  nuevoRegistro: mascotaModel = {
    id: 0,
    nombreMascota: '',
    edad: 0,
    estado: '',
    ultimaRevision: '',
  };
  displayModal: boolean = false;

  ngOnInit() {
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

  public limpiarFormulario() {
    this.nuevoRegistro = {
      id: 0,
      nombreMascota: '',
      edad: 0,
      estado: '',
      ultimaRevision: '',
    };
    this.mensajeErrorFormulario = "";
  }

  public eliminarRegistro(id:Number) {
    const index = this.historial.findIndex((item) => item.id === id);
    this.historial.splice(index, 1);
  }

  public cerrarModal() {
    this.displayModal = false;
    this.limpiarFormulario();
  }

  public abrirModal(id:Number) {
    this.displayModal = true;
    this.editar = false;
    this.idEditar = id;
  }

  public abrirModalRegistro(){
    this.displayModal = true;
    this.editar = true;
  }

  public validarFormulario(){
    if(this.nuevoRegistro.edad < 0 
      || this.nuevoRegistro.estado == '' 
      || this.nuevoRegistro.nombreMascota == '' 
      || this.nuevoRegistro.ultimaRevision == ''){
        this.mensajeErrorFormulario = "Los campos son obligatorios";
        return false;
    } else {
      return true;
    }
  }

  public crearRegistro() {
    if(this.validarFormulario() === true){
      this.historial.push(this.nuevoRegistro);
      this.limpiarFormulario();
      this.displayModal = false;
    }
  }
  public actualizarRegistro() {
    if(this.validarFormulario() === true){
      const index = this.historial.findIndex((item) => item.id === this.idEditar);
      this.historial[index] = this.nuevoRegistro;
      this.displayModal = false;
      this.limpiarFormulario();
    }
  }

}
