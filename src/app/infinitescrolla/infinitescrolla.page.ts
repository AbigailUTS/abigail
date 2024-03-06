import { Component, OnInit } from '@angular/core';
import { InfinitescrolladataService } from '../services/infinitescrolladata.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-infinitescrolla',
  templateUrl: './infinitescrolla.page.html',
  styleUrls: ['./infinitescrolla.page.scss'],
})
export class InfinitescrollaPage implements OnInit {
  items: any[] = [];
  nombre: string = '';
  categoria: string = '';
  cantidad: string = '';
  provedor: string = '';
  precio: string = '';
  fechaIngreso: string = '';
  idStock: string = '';

  constructor(private infiniteScrolldata: InfinitescrolladataService) {}

  ngOnInit() {
    this.generarItems();
  }
  generarItems() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
    //items->[0,1,2,3,4,5,...,99]
  }
  onIonInfinite(evento: any) {
    this.generarItems();
    console.log('onIonInfinite');
    setTimeout(()=>{
      (evento as InfiniteScrollCustomEvent).target.complete();

    },500);
  }

  limpiarFormulario(){

  }
  async guardarDatos(){
    const datos = {
      fechaIngreso: this.fechaIngreso,
      nombre: this.nombre,
      provedor: this.provedor,
      categoria: this.categoria,
      precio: this.precio,
      cantidad: this.cantidad,
    };
    const saved = await this.infiniteScrolldata.uploadData(datos, this.idStock);

  }
}
