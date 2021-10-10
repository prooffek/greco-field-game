import {_gameNamesDict} from "../Utilities/_gameNamesDict";
import {GameStage} from "./GameStage";
import {_mapImports} from "../Utilities/_mapDict";
import {_questions} from "../Utilities/_questionsDicts";

export class Game {
    #gameName;
    #player;
    #stages;
    
    constructor(gameName, player) {
        this.#gameName = gameName;
        this.#player = player;
        this.#stages = this.setStages(gameName);
    }
    
    setStages(gameName) {
        let i = 0;
        const stages = [];

        for (const [key, value] of _questions[gameName]){
            stages.push(new GameStage(i, _mapImports[`map_${i}`], value))
            i++;
        }
        
        return stages;
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