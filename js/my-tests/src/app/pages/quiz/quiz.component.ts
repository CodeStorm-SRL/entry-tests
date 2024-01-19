import { Component, ViewChild } from '@angular/core';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { ResultComponent } from 'src/app/components/result/result.component';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  public questionsLimit : number;
  public difficulty : string;
// Variabili per controllare la visualizzazione delle schermate
  public showMainMenu : boolean;
  public showQuizScreen!: boolean;
  public showResultScreen!: boolean;

  public spinner!: boolean;
// Accesso ai componenti figli per la gestione delle domande e dei risultati
  @ViewChild('quiz',{static:true}) quiz! : QuestionComponent;
  @ViewChild('result',{static:true}) result! : ResultComponent;

  constructor(private quizService:QuizService){
    // Inizializzazione delle variabili nel costruttore per impostazioni di default
    this.questionsLimit = 5;
    this.difficulty = "Easy"
    this.showMainMenu = true;
  }
// Carica le domande del quiz e prepara la schermata del quiz
  quizQuestions(): void{
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty,this.questionsLimit)
    .subscribe((response)=>{
      this.quiz.questions = response;
      this.quiz.reset();
      this.quiz.showQuestion(0);
      this.showMainMenu = false;
      this.showQuizScreen = true;
      this.toggleSpinner();
    });
  }
// Imposta il risultato finale e mostra la schermata dei risultati
  finalResult(result:any):void{
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }
// Torna al menu principale dalla schermata dei risultati
  showMainMenuScreen(event:any):void{
    this.showResultScreen = false;
    this.showMainMenu = true;
  }
// Attiva o disattiva lo spinner di caricamento
  toggleSpinner(){
    this.spinner = !this.spinner;
  }

}
