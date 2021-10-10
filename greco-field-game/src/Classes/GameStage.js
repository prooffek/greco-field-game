export class GameStage {
    #index;
    #map;
    #questions;
    
    constructor(index, map, questions) {
        this.#index = index;
        this.#map = map;
        this.#questions = questions;
    }
    
    getStageIndex(){
        return this.#index;
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
    
    
}