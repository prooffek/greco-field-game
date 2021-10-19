import {_languages} from "../Utilities/_languagesDict";
import {_places, _targets} from "../Utilities/_targetsDict";
import {Question} from "../Classes/Question";
import {_gameNamesDict} from "../Utilities/_gameNamesDict";

let placeName;
let targetFolder;
let lang;

export function _loadFile(place=_places[_gameNamesDict.Italy.Gaddiciano], dataType=_targets.questions, language=_languages.english) {
    placeName = place;
    targetFolder = dataType;
    lang = language;
    
    switch (dataType) {
        case _targets.questions:
            return loadQuestions();
        case _targets.wrongAnswers:
            return loadListFromFile(targetFolder)
        default:
            return [];
    }
} 

function loadListFromFile(targetFolder) {
    return require(`../_jsonFiles/${placeName}/${targetFolder}/${lang}-wrong-answers.json`)
}

function loadQuestions() {
    const questions = [];
    
    for (const question of require(`../_jsonFiles/${placeName}/Questions/${lang}-questions.json`)) {
        questions.push(
            new Question(
                question.id, 
                question.text, 
                question.correctAnswer, 
                question.stage,
                loadListFromFile(_targets.wrongAnswers)));
    }
    
    return questions;
}