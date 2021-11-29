import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {
  suscripcion = {
    nombre:'',
    rut:'',
    dv:'',
    phono:'',
    email:'',
    interes:'',
    comentario:''
  }

  formularioSuscribe: FormGroup;
  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController) { 
    this.formularioSuscribe = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'rut': new FormControl("",Validators.required),
      'dv': new FormControl("",Validators.required),
      'phono': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'interes': new FormControl("",Validators.required),
      'comentario': new FormControl(""),
    })
  }

  ngOnInit() {
  }

  async enviar(){
    if(this.formularioSuscribe.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    else{
      this.onSubmit();
      this.navCtrl.navigateRoot('inicio');
    }
  }
  
  onSubmit(){
    console.log('submit');
    console.log(this.suscripcion);
  }
}
