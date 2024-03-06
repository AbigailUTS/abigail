import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  ngOnInit(): void {}

  currentQuestionIndex: number = 0;
  questions: string[] = [
    '¿Qué personaje de caricaturas es tu favorito?',
    '¿Qué superpoder te gustaría tener?',
    '¿Cuál es tu comida favorita?',
    '¿Cómo pasarías un día libre?',
    '¿Qué actividad disfrutas más?',
    '¿Qué lugar te gustaría visitar?',
    '¿Cuál es tu color favorito?',
    '¿Cuál es tu película de animación favorita?',
  ];
  answers: string[] = [];
  characters: { name: string; description: string; pic: string }[] = [
    {
      name: 'Mickey Mouse',
      description:
        'Eres un clásico y amigable, siempre dispuesto a ayudar a tus amigos.',
      pic: '1.png',
    },
    {
      name: 'SpongeBob SquarePants',
      description: 'Eres optimista y alegre, y disfrutas de la vida al máximo.',
      pic: '2.png',
    },
    {
      name: 'Pikachu',
      description:
        'Eres enérgico y leal, y siempre estás listo para una aventura.',
      pic: '3.png',
    },
    {
      name: 'Bugs Bunny',
      description:
        'Eres ingenioso y divertido, y siempre sabes cómo salir de situaciones difíciles.',
      pic: '4.png',
    },
    {
      name: 'Tom and Jerry',
      description:
        'Eres travieso y astuto, pero también tienes un buen corazón y valoras la amistad.',
      pic: '5.png',
    },
    {
      name: 'Minnie Mouse',
      description:
        'Eres dulce y encantador, y siempre pones a tus seres queridos en primer lugar.',
      pic: '6.png',
    },
    {
      name: 'Bart Simpson',
      description:
        'Eres rebelde y siempre estás buscando nuevas aventuras y emociones.',
      pic: '7.png',
    },
    {
      name: 'Elsa (Frozen)',
      description:
        'Eres valiente y poderoso, y estás dispuesto a enfrentar cualquier desafío para proteger a tus seres queridos.',
      pic: '8.png',
    },
  ];

  // Respuestas a las preguntas
  answersOptions: string[][] = [
    ['Mickey Mouse', 'SpongeBob SquarePants', 'Pikachu', 'Bugs Bunny'],
    ['Volar', 'Teletransportarme', 'Ser invisible', 'Super fuerza'],
    ['Pizza', 'Hamburguesa', 'Sushi', 'Tacos'],
    [
      'Ver una película',
      'Ir a la playa',
      'Jugar videojuegos',
      'Dormir todo el día',
    ],
    ['Jugar deportes', 'Leer', 'Cantar', 'Bailar'],
    ['París', 'Tokio', 'Nueva York', 'Playa tropical'],
    ['Rojo', 'Azul', 'Verde', 'Rosa'],
    ['Toy Story', 'Frozen', 'Shrek', 'Cómo Entrenar a tu Dragón'],
  ];

  constructor() {}

  nextQuestion(answer: string) {
    this.answers.push(answer);
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResult();
    }
  }

  currentQuestion(){
    return this.questions[this.currentQuestionIndex];
  }

  showResults: boolean = false;
  result: string = '';
  description: string = '';
  imagePath: string = '';

  showResult() {
    // Calculate result based on answers
    let resultIndex = 0;
    // for (let i = 1; i < this.characters.length; i++) {
    //   if (
    //     this.countMatchingAnswers(this.answers, this.characters[i].name) >
    //     this.countMatchingAnswers(
    //       this.answers,
    //       this.characters[resultIndex].name
    //     )
    //   ) {
    //     resultIndex = i;
    //   }
    // }
    resultIndex = Math.floor(Math.random() * this.characters.length);
    this.result = `Eres ${this.characters[resultIndex].name}!`;
    this.description = this.characters[resultIndex].description;
    this.imagePath =
      '../../assets/personajes/' + this.characters[resultIndex].pic;

    this.showResults = true;
  }

  countMatchingAnswers(answers: string[], characterName: string): number {
    return answers.filter((answer) => answer === characterName).length;
  }
}
