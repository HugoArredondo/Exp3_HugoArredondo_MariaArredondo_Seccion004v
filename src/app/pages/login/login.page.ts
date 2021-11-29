import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //agregar este para login
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    user: '',
    pass: '',
  }

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController) { 
    this.formularioLogin = this.fb.group({
      'user': new  FormControl("",Validators.required),
      'pass': new  FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }
  
  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'))

    if(usuario.user == f.user && usuario.pass == f.pass){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        message: '¡Bienvenid@ '+usuario.nombre+' a EducTips!',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.navCtrl.navigateRoot('inicio');
    }
    else{
      const alert2 = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });
      await alert2.present();
    }
  }
  // onSubmit(){
  //   console.log('submit');
  //   console.log(this.login);
  // }
}
