import {_loadFile} from "../fileLoader/fileLoader";

export class GameStage {
    #index;
    #map;
    #questions;
    
    constructor(index, map, questions) {
        this.#index = index;
        this.#map = map;
        this.#questions = questions;
    }
    
    getMap() {
        return this.#map;
    }

    getQuestionsAmount(){
        return this.#questions.length;
    }
    
    getQuestionObj(index){
        if (index >= 0 && index < this.getQuestionsAmount()){
            return this.#questions[index];
        }
        return null;
    }
    
    getQuestions() {
        return this.#questions;
    }

    getObject() {
        return {
            index: this.#index,
            map: this.#map,
            questions: [...this.#questions.map(question => question.getObject())]
        };
    }
    
    updateLanguage(newQuestions, answers) {
        this.#questions.map(question => question.updateLanguage(newQuestions, answers))
    }
}