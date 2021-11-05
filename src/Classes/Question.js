import {getRandomEl, shuffleList} from "../Utilities/_utilityFunctions";

const WRONG_ANSWERS_NUM = 3;
const FINAL_ANSWERS_NUM = 4;

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
        if (answers.length === FINAL_ANSWERS_NUM && answers.includes(this.#correctAnswer))
            return answers;
        
        let answersList = [this.#correctAnswer, ...getRandomEl(WRONG_ANSWERS_NUM, answers)]
        shuffleList(answersList);
        return answersList;
    }
    
    getAnswersList() {
        return this.#answersList;
    }
    
    updateLanguage(questions) {
        const question = questions.filter(question => question.getId() === this.#id)[0];
        this.#text = question.getQuestionText();
        this.#correctAnswer = question.getCorrectAnswer();
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
