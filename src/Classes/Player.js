import {removeDuplicatedAnswer} from "../Utilities/_utilityFunctions";

export class Player {
    #name;
    #answers;
    #score;
    #emptyAnswer
    
    constructor(name=null, answers=[], score=0) {
        this.#name = name;
        this.#answers = answers;
        this.#score = score;
        this.#emptyAnswer = {
            questionId : null, 
            isCorrect : false, 
            answerId : null
        }
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
        const prevAnswer = this.#answers.filter(a => a.questionId === answer.questionId)[0];
        this.#answers = removeDuplicatedAnswer(this.#answers, prevAnswer);
        this.#answers.push(answer);
    }
    
    getAnswers() {
        return this.#answers;
    }
    
    getAnswer(questionId) {
        let answer = this.#answers.filter(a => a.questionId === questionId)[0];
        return answer ? answer : this.#emptyAnswer;
    }

    getObject() {
        return {
            name: this.#name,
            answers: this.#answers,
            score: this.#score
        }
    }
}