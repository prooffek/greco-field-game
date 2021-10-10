export class Player {
    #name;
    #score;
    
    constructor() {
        this.#name = null;
        this.#score = 0;
    }
    
    setName(name) {
        this.#name = name;
    }
    
    getName() {
        return this.#name
    }
    
    setScore(score) {
        this.#score = score;
    }
    
    incrementScore() {
        this.#score++;
    }
    
    decrementScore() {
        this.#score--;
    }
}