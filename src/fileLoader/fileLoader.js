import {_languages} from "../Utilities/_dictionaries";
import {_places, _targetFolders} from "../Utilities/_dictionaries";
import {Question} from "../Classes/Question";
import {_gameNamesDict} from "../Utilities/_dictionaries";

let placeName;
let targetFolder;
let lang;

export function _loadFile(place=_places[_gameNamesDict.Italy.Gaddiciano], dataType=_targetFolders.questions, language=_languages.english) {
    placeName = place;
    targetFolder = dataType;
    lang = language;
    
    switch (dataType) {
        case _targetFolders.questions:
            return loadQuestions();
        case _targetFolders.wrongAnswers:
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
                loadListFromFile(_targetFolders.wrongAnswers)));
    }
    
    return questions;
}