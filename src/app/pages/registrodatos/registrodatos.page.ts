import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrodatosService, Datos } from 'src/app/services/registrodatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-registrodatos',
  templateUrl: './registrodatos.page.html',
  styleUrls: ['./registrodatos.page.scss'],
})
export class RegistrodatosPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: RegistrodatosService, 
    private plt: Platform, private toastController: ToastController) {  //el toastController es una biblioteca q permite generar ventanas de mensaje
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  //create
  // addDatos(){
  //   this.newDato.modified = Date.now();
  //   this.newDato.id = Date.now();
  //   this.storageService.addDatos(this.newDato).then(dato=>{
  //     this.newDato = <Datos>{};
  //     this.showToast('¡Registro realizado correctamente!');
  //     this.loadDatos();
  //   });
  // }

  //update
  updateDatos(dato: Datos ){
    dato.nombre = `${dato.nombre} ¡Actualizado!`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('¡Registro actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('¡Registro eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
