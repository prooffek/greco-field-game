import {getRandomEl, shuffleList} from "../Utilities/_utilityFunctions";

export class Question {
    #id;
    #text;
    #correctAnswer;
    #answersList;
    #stage;

    constructor(id, text, correctAnswer, stage, answers) {
        this.#id = id;
        this.#text = text;
        this.#correctAnswer = correctAnswer;
        this.#stage = stage;
        this.#answersList = this.setAnswersList(answers);
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
    
    setAnswersList(answers) {
        if (answers.length === 4 && answers.includes(this.#correctAnswer))
            return answers;
        
        let answersList = [this.#correctAnswer, ...getRandomEl(3, answers)]
        shuffleList(answersList);
        return answersList;
    }
    
    getAnswersList() {
        return this.#answersList;
    }

    getObject() {
        return {
            id: this.#id,
            text: this.#text,
            correctAnswer: this.#correctAnswer,
            stage: this.#stage,
            answersList: this.#answersList
        }
    }
}
