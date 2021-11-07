import {getRandomEl, shuffleList} from "../Utilities/_utilityFunctions";
import {_loadFile} from "../fileLoader/fileLoader";
import {_targetFolders} from "../Utilities/_dictionaries";

const WRONG_ANSWERS_NUM = 3;
const FINAL_ANSWERS_NUM = 4;

export class Question {
    #id;
    #text;
    #correctAnswerId;
    #answersList;
    #stage;

    constructor(id, text, correctAnswerId, stage, answers) {
        this.#id = id;
        this.#text = text;
        this.#correctAnswerId = correctAnswerId;
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
    
    getCorrectAnswer(answers) {
        console.log(this.#correctAnswerId);
        const answer = answers.filter(answer => answer.id === this.#correctAnswerId);
        return answer ? answer[0] : null;
    }
    
    getAnswerText(answerId) {
        const answer = this.#answersList.filter(answer => answer.id === answerId)[0];
        return answer ? answer.text : null;
    }
    
    isAnswerCorrect(answerId){
        return answerId === this.#correctAnswerId;
    }
    
    setAnswersList(answers) {
        // console.log(answers);
        const availableAnswers = answers.filter(answer => answer.questionId.includes(this.#id));
        const correctAnswer = this.getCorrectAnswer(availableAnswers);
        
        if (availableAnswers.length === FINAL_ANSWERS_NUM && correctAnswer)
            return answers;
        
        const answersList = [correctAnswer, ...getRandomEl(WRONG_ANSWERS_NUM, availableAnswers, this.#correctAnswerId)]
        shuffleList(answersList);
        
        return answersList;
    }
    
    getAnswersList() {
        return this.#answersList;
    }
    
    updateLanguage(questions, answers) {
        const question = questions.filter(question => question.getId() === this.#id)[0];
        const newAnswers = this.#answersList.map(answer => answers.filter(a => answer.id === a.id)[0]);
        this.#text = question.getQuestionText();
        this.#answersList = newAnswers
    }

    getObject() {
        return {
            id: this.#id,
            text: this.#text,
            correctAnswerId: this.#correctAnswerId,
            stage: this.#stage,
            answersList: this.#answersList
        }
    }
}
