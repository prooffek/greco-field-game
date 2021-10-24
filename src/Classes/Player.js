import {removeDuplicatedAnswer} from "../Utilities/_utilityFunctions";

export class Player {
    #name;
    #answers;
    #score;
    
    constructor(name=null, answers=[], score=0) {
        this.#name = name;
        this.#answers = answers;
        this.#score = score;
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

    getObject() {
        return {
            name: this.#name,
            answers: this.#answers,
            score: this.#score
        }
    }
}