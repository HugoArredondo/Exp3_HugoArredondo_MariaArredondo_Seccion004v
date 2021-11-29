import { Component } from '@angular/core';
// import { AlertController, NavController } from '@ionic/angular';


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
  constructor(
              // public alertController: AlertController,
              // public navCtrl: NavController
              ) {}

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

  // async salir(){
  //   const alert = await this.alertController.create({
  //     header: 'Salir',
  //     message: '¿Quiere salir de EducTips?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: ()=>{

  //         }
  //       }, {
  //         text: 'Si',
  //         handler: ()=> {
  //           localStorage.removeItem('ingresado');
  //           this.navCtrl.navigateRoot('login');
  //         }
  //       }
  //     ]
  //   })
  // }

}