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

  public showMainMenu : boolean;
  public showQuizScreen!: boolean;
  public showResultScreen!: boolean;

  public spinner!: boolean;

  @ViewChild('quiz',{static:true}) quiz! : QuestionComponent;
  @ViewChild('result',{static:true}) result! : ResultComponent;

  constructor(private quizService:QuizService){
    this.questionsLimit = 5;
    this.difficulty = "Easy"
    this.showMainMenu = true;
  }

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

  finalResult(result:any):void{
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }

  showMainMenuScreen(event:any):void{
    this.showResultScreen = false;
    this.showMainMenu = true;
  }

  toggleSpinner(){
    this.spinner = !this.spinner;
  }

}
