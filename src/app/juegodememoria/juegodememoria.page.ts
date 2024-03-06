import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegodememoria',
  templateUrl: './juegodememoria.page.html',
  styleUrls: ['./juegodememoria.page.scss'],
})
export class JuegodememoriaPage implements OnInit {
  private images = [
    { id: 1, url: '../../assets/imgs/1.jpg' },
    { id: 2, url: '../../assets/imgs/2.jpg' },
    { id: 3, url: '../../assets/imgs/3.jpg' },
    { id: 4, url: '../../assets/imgs/4.jpg' },
    { id: 5, url: '../../assets/imgs/5.jpg' },
    { id: 6, url: '../../assets/imgs/6.jpg' },
  ];
  private aciertos = 6;
  private last_select_id: number = -1;
  public cards: any = [];
  public cont_intentos = 0;
  public count_aciertos = 0;
  public images_inact = '../../assets/imgs/back.jpg';
  public intentos = this.images.length * 3;

  constructor() {}

  ngOnInit() {
    let count_index = 0;
    for (let i = 0; i < this.aciertos * 2; i++) {
      if (count_index == this.aciertos) {
        count_index = 0;
      }
      let img = this.images[count_index];
      this.cards.push({
        id: img.id,
        active: true,
        url: img.url,
        visible: false,
      });
      count_index++;
    }
    this.randomCards(this.cards);
  }

  cardSelected(idx: number) {
    if (!this.cards[idx].active) {
      return;
    }
    this.cards[idx].visible = true;

    if (this.last_select_id == -1) {
      this.last_select_id = idx;
      this.cards[idx].visible = true;
      this.cards[idx].active = false;
    } else {
      this.logicGame(idx);
    }
    if (this.aciertos == this.count_aciertos) {
      this.cards[idx].visible = true;
      this.cards[idx].active = false;
      setTimeout(function () {
        alert('Ganaste!!');
        window.location.reload();
      }, 500);
    }
    if (this.cont_intentos == this.intentos - 1) {
      alert('Te quedaste sin intentos');
      window.location.reload();
    }
  }

  logicGame(idx: number) {
    if (this.cards[this.last_select_id].id == this.cards[idx].id) {
      //aumentar aciertos si coinciden
      this.increasePoints(idx);
    } else {
      //no hacen match
      let _this = this;
      console.log('NOOO MATCH!');
      setTimeout(function () {
        _this.cards[_this.last_select_id].visible = false; //ocultar
        _this.cards[_this.last_select_id].active = true; //activar

        _this.cards[idx].visible = false; //oculta
        _this.last_select_id = -1;
        console.log('NO MATCH!');
      }, 500);
      this.cont_intentos++;
    }
  }

  increasePoints(idx: number) {
    this.count_aciertos++;
    this.cards[idx].visible = true;
    this.cards[idx].active = false;
    this.last_select_id = -1;
    this.cont_intentos++;
  }

  randomCards(array: any[]) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
