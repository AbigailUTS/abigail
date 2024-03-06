import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginstateComponent } from '../componets/loginstate/loginstate.component';
import { AlertController } from '@ionic/angular';
//importar componente de login
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  user: string = '';
  pass: string = '';
 constructor(private alertController: AlertController,
             private toastController: ToastController) {}

  ngOnInit() {
  }
    //guardar datos de login y logica
  login(){

  }
  async mostrarMensaje(){
    //alertController
    const alerta= await this.alertController.create({
      header:'',
      message:'',
      buttons:['cerrar']
    });
    await alerta.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  mostrarValores() {
    console.log(this.user);
    console.log(this.pass);

    this.presentToast('top', "user: "+this.user + " pass: " + this.pass);
  }

}
