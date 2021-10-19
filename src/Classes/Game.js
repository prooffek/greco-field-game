import {_gameNamesDict} from "../Utilities/_gameNamesDict";
import {GameStage} from "./GameStage";
import {_mapImports} from "../Utilities/_mapDict";
import {Player} from "./Player";
import {_loadFile} from "../fileLoader/fileLoader";
import {_places, _targets} from "../Utilities/_targetsDict";
import {_languages} from "../Utilities/_languagesDict";
import {getStagesNumber} from "../Utilities/_utilityFunctions";

export class Game {
    #gameName;
    #player;
    #stages;
    
    constructor(gameName, player, language) {
        this.#gameName = gameName;
        this.#player = player;
        this.#stages = this.setStages(gameName, language);
    }
    
    setStages(gameName, language) {
        const stages = [];
        const questions = _loadFile(_places[gameName], _targets.questions, language)
        
        for (let i = 0; i <= getStagesNumber(questions); i++) {
            stages.push(
                new GameStage(
                    i, 
                    _mapImports[`map_${i}`], 
                    questions.filter(question => question.getStage() === i)
                )
            );
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
    
    getAllQuestions() {
        const questions = [];
        this.#stages.map(stage => questions.push(...stage.getQuestions()))
        return questions;
    }
}