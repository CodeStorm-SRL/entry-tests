import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/shared/interfaces/question';
import { Result } from 'src/app/shared/interfaces/result';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Output() finalResult = new EventEmitter();// Emittente di eventi per inviare il risultato finale

  public questions: Array<any>; // Array per memorizzare le domande del quiz
  public selected = {} as Question; // Domanda selezionata corrente
  public result = {} as Result; // Oggetto per memorizzare il risultato del quiz


  public index!: number;
  public answer!: string;

  constructor(){
    this.questions = [];
    this.reset();
  }
// Mostra una domanda in base all'indice
  showQuestion(index:number):void{
    this.selected = this.questions[index];
  }

  nextQuestion():void{ // Passa alla prossima domanda o conclude il quiz
    if(this.answer == '')return; // Se non c'è una risposta selezionata, non fa nulla
    this.checkAnswer(); // Controlla la correttezza della risposta
    this.index++; // Incrementa l'indice per la prossima domanda
    if(this.questions.length > this.index){
      this.answer = '';// Resetta la risposta per la prossima domanda
      this.showQuestion(this.index); // Mostra la prossima domanda
    }else{
      this.finishQuiz(); // Se non ci sono più domande, conclude il quiz
    }
  }

  checkAnswer(){ // Controlla se la risposta è corretta e aggiorna il punteggio
    let isAnswer = this.questions[this.index].correct_answers[this.answer];
    (isAnswer === 'true') ? this.result.correct++ : this.result.wrong++;
  }

  finishQuiz(){ // Calcola i risultati finali e emette l'evento finale
    this.result.total = this.questions.length;
    this.result.correctPercentage = (this.result.correct / this.result.total) * 100;
    this.result.wrongPercentage = (this.result.wrong / this.result.total) * 100;

    this.finalResult.emit(this.result);

  }

  reset() : void{ // Resetta lo stato iniziale del componente
    this.answer = '';
    this.index = 0;
    this.result = {
      total : 0,
      correct : 0,
      wrong : 0,
      correctPercentage : 0,
      wrongPercentage : 0
    }
  }
}
