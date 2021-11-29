import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrodatosService, Datos } from 'src/app/services/registrodatos.service';
import { Platform, ToastController, IonList, AlertController, NavController} from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //agregar este para login

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    nombre:'',
    rut:'',
    dv:'',
    email:'',
    user: '',
    pass: '',
  }

  formularioRegistro: FormGroup;

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: RegistrodatosService,
              public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController,
              private plt: Platform, 
              private toastController: ToastController) {  //el toastController es una biblioteca q permite generar ventanas de mensaje
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
      this.formularioRegistro = this.fb.group({
        'nombre': new  FormControl("",Validators.required),
        'rut': new  FormControl("",Validators.required),
        'dv': new  FormControl("",Validators.required),
        'email': new  FormControl("",Validators.required),
        'user': new  FormControl("",Validators.required),
        'pass': new  FormControl("",Validators.required),
      });
    }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienens que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    else{
      this.onSubmit();
    }

    var usuario = {
      nombre: f.nombre,
      rut: f.rut,
      dv: f.dv,
      email: f.email,
      user: f.user,
      pass: f.pass
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('inicio');
  }
  
  // async addDatos(){
  //   this.newDato.modified = Date.now();
  //   this.newDato.id = Date.now();
  //   this.storageService.addDatos(this.newDato).then(dato=>{
  //     this.newDato = <Datos>{};
  //     this.showToast('¡Registro realizado correctamente!');
  //     this.loadDatos();
  //   });

  //   var f = this.formularioRegistro.value;

  //   if(this.formularioRegistro.invalid){
  //     const alert = await this.alertController.create({
  //       header: 'Datos Incompletos',
  //       message: 'Tienens que llenar todos los datos',
  //       buttons: ['Aceptar']
  //     });

  //     await alert.present();
  //     return;
  //   }

  //   var newDato = {
  //     nombre: f.nombre,
  //     rut: f.rut,
  //     dv: f.dv,
  //     email: f.email,
  //     user: f.user,
  //     pass: f.pass
  //   }

  //   localStorage.setItem('usuario', JSON.stringify(newDato));
  //   localStorage.setItem('ingresado','true');
  //     this.navCtrl.navigateRoot('inicio');
  // }

  onSubmit(){
    console.log('submit');
    console.log(this.newDato);
  }

  //get
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  //create
  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('¡Registro realizado correctamente!');
      this.loadDatos();
    });
  }

  // //update
  // updateDatos(dato: Datos ){
  //   dato.nombre = `${dato.nombre} ¡Actualizado!`;
  //   dato.modified = Date.now();
  //   this.storageService.updateDatos(dato).then(item=>{
  //     this.showToast('¡Registro actualizado!')
  //     this.myList.closeSlidingItems();
  //     this.loadDatos();
  //   });
  // } 

  // //delete
  // deleteDatos(dato: Datos){
  //   this.storageService.deleteDatos(dato.id).then(item=>{
  //     this.showToast('¡Registro eliminado');
  //     this.myList.closeSlidingItems();
  //     this.loadDatos();
  //   });
  // }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
