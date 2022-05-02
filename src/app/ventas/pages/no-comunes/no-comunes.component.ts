import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nselect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['Maria', 'Jorge', 'Pepe', 'Carlos', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa,Canada'
  }

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]
  //Async Pipe
  miObservable = interval(3000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa')
    }, 3500);
  });
}
