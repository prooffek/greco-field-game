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
        let prevAnswer = this.#answers.filter(a => a.questionId === answer.questionId);
        
        if (prevAnswer.length > 0){
            this.#answers.pop(prevAnswer);
        }
        
        this.#answers.push(answer);
    }
    
    getAnswers() {
        return this.#answers;
    }
}