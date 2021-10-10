export class Game {
    #gameName;
    #player;
    #stages;
    
    constructor(name, player, stages) {
        this.#gameName = name;
        this.#player = player;
        this.#stages = stages
    }
    
    getName() {
        return this.#gameName;
    }
    
    setNewPlayer(player) {
        this.#player = player;
    }
    
    getPlayer() {
        return this.#player;
    }
    
    getStagesAmount() {
        return this.#stages.length;
    }
    
    getStage(index) {
        if (index >=0 && index < this.getStagesAmount())
            return this.#stages[index];
        return null;
    }
    
    getStages() {
        return this.#stages;
    }
    
    static cloneGameObj(gameObj){
        return new this(gameObj.getName(), gameObj.getPlayer(), gameObj.getStages());
    }
}