import {getRandomEl, shuffleList} from "../Utilities/_utilityFunctions";
import {_answers} from "../Utilities/_wrongAnswersDict";

export class Question {
    #id;
    #text;
    #correctAnswer;
    #answersList;

    constructor(id, text, correctAnswer) {
        this.#id = id;
        this.#text = text;
        this.#correctAnswer = correctAnswer;
        this.#answersList = this.setAnswersList();
    }

    getId() {
        return this.#id;
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
    
    setAnswersList() {
        let answers = [this.#correctAnswer, ...getRandomEl(3, _answers)]
        shuffleList(answers);
        return answers;
    }
    
    getAnswersList() {
        return this.#answersList;
    }
}
