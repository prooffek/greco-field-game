import {getRandomEl, shuffleList} from "../Utilities/_utilityFunctions";

export class Question {
    #id;
    #text;
    #correctAnswer;
    #answersList;
    #stage;

    constructor(id, text, correctAnswer, stage, wrongAnswers) {
        this.#id = id;
        this.#text = text;
        this.#correctAnswer = correctAnswer;
        this.#stage = stage;
        this.#answersList = this.setAnswersList(wrongAnswers);
    }

    getId() {
        return this.#id;
    }
    
    getStage() {
        return this.#stage;
    }
    
    getQuestionText() {
        return this.#text;
    }

    getCorrectAnswer() {
        return this.#correctAnswer;
    }
    
    isAnswerCorrect(answer){
        return answer === this.#correctAnswer;
    }
    
    setAnswersList(wrongAnswers) {
        let answers = [this.#correctAnswer, ...getRandomEl(3, wrongAnswers)]
        shuffleList(answers);
        return answers;
    }
    
    getAnswersList() {
        return this.#answersList;
    }
}
