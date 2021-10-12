import {removeDuplicatedAnswer} from "../Utilities/_utilityFunctions";

export class Player {
    #name;
    #answers;
    #score;
    
    constructor() {
        this.#name = null;
        this.#answers = [];
        this.#score = 0;
    }
    
    setName(name) {
        this.#name = name;
    }
    
    getName() {
        return this.#name
    }
    
    setScore() {
        this.#score = this.#answers.filter(a => a.isCorrect === true).length
    }
    
    getScore() {
        this.setScore();
        return this.#score;
    }
    
    addAnswer(answer) {
        let prevAnswer = this.#answers.filter(a => a.questionId === answer.questionId)[0];
        this.#answers = removeDuplicatedAnswer(this.#answers, prevAnswer);
        this.#answers.push(answer);
    }
    
    getAnswers() {
        return this.#answers;
    }
    
    getAnswer(questionId) {
        let answer = this.#answers.filter(a => a.questionId === questionId)[0];
        return answer ? answer.answer : null;
    }
}