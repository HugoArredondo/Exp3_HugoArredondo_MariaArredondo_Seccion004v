import { Component } from '@angular/core';


interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'home-outline',
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'school-outline',
      name: 'Establecimientos', 
      redirecTo: '/tipo'
    },
    {
      icon: 'person-circle-outline', 
      name: 'Inicio Sesión', 
      redirecTo: '/login'
    },
    {
      icon: 'mail-unread-outline', 
      name: 'Suscripción', 
      redirecTo: '/suscripcion'
    },
    {
      icon: 'information-outline', 
      name: 'Información', 
      redirecTo: '/info'
    },
    {
      icon: 'book-outline', 
      name: 'Datos de Registros', 
      redirecTo: '/registrodatos'
    },
  ]

}


