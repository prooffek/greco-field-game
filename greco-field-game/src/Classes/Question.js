export class Question {
    #id;
    #text;
    #correctAnswer;

    constructor(id, text, correctAnswer) {
        this.#id = id;
        this.#text = text;
        this.#correctAnswer = correctAnswer;
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
    
    idAnswerCorrect(answer){
        return answer === this.#correctAnswer;
    }
}
