import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase';

@Injectable({
  providedIn: 'root',
})
export class InfinitescrolladataService {
  constructor() {}

  uploadData(data:{}, tel: any) {
    //[{clave:valor}];
    if (!data) {
      return false;
    }

    try {
      const databaseRef = firebase.database().ref('/datos/mensajes');
      //cosnt nuevaId = dataRef.push().key;
      const dataLog = new Date();
      databaseRef.child(tel).set(data);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  // [{telefono:num, nombre:'', hora:''}]
  // datos->mensajes->tel->{nombre,hora,
  // numeroMensajes, numDes}
  items: any = [];
  requestData() {
    try {
      this.items = [];
      const databaseRef = firebase.database().ref('/datos/mensajes');
      databaseRef.once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const datos = childSnapshot.val();
          const numero = childSnapshot.key;
          this.items.push({ datos: datos, numero: numero });
        });
      });
      return this.items;
    } catch (e) {
      return [];
    }
  }
}
