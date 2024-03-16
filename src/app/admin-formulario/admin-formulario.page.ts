import { Component, OnInit } from '@angular/core';
interface Pregunta{
pregunta:string;
respuestas:{
  ra:string;
  rb:string;
  rc:string;
  rd:string;
};

};

@Component({
  selector: 'app-admin-formulario',
  templateUrl: './admin-formulario.page.html',
  styleUrls: ['./admin-formulario.page.scss'],
})
export class AdminFormularioPage implements OnInit {
  preguntas: Pregunta[] = [];
  contador:number[] = [1];
  index:number=1;
titulo: any;
subtitulo: any;
  constructor() { }
  ngOnInit() {
  }
  agregar(){
    const numero = this.index + 1;
    this.index++;
    this.contador.push(numero);

  }
  eliminar(posicion:number){
    this.contador = this.contador.filter(e=>e!==posicion);

  }
}

