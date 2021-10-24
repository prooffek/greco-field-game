import {GameStage} from "../Classes/GameStage";
import {Question} from "../Classes/Question";
import {Player} from "../Classes/Player";
import {Game} from "../Classes/Game";

export function getRandomEl(counter, list) {
    let listToReturn = [];
    
    while (listToReturn.length < counter) {
        const randomEl = list[Math.floor(Math.random() * list.length)];
        if (!(listToReturn.includes(randomEl))) listToReturn.push(randomEl);
    }
    
    return listToReturn;
}

export function shuffleList(list) {
    for (let i = 0; i < 3; i++){
        list.sort((a, b) => 0.5 - Math.random());
    }
}

export function removeDuplicatedAnswer(list, answer) {
    if (answer){
        return list.filter(a => a.questionId !== answer.questionId);
    }
    return list;
}

export function getStagesNumber(questions) {
    let max = 0;
    
    for (const question of questions) {
        let stage = question.getStage();
        if (max < stage) max = stage; 
    }
    
    return max;
}

export function parsToGameObject(object) {
    const game = object.game;
    
    const player = game.player;
    const stages = [
        ...game.stages.map(stage => new GameStage(
            stage.index,
            stage.map,
            stage.questions.map(question => new Question(
                question.id,
                question.text,
                question.correctAnswer,
                question.stage,
                question.answersList
            ))
        ))
    ];

    return new Game(
        game.gameName,
        new Player(player.name, player.answers, player.score),
        game.language,
        stages
    )
}